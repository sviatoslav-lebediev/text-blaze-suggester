import React from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as statuses from 'modules/tasks/statuses';
import styles from './id.module.css';

const INTERVAL = 5000;

const TaskDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [result, setResult] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (id) {
      const fetchResult = async () => {
        try {
          const { data } = await fetch(`/api/tasks/${id}`).then((result) => {
            if (result.ok) {
              return result.json();
            }

            throw new Error(result.status);
          });

          if (data.status !== statuses.IN_PROGRESS) {
            clearInterval(interval);
          }

          setResult(data);
        } catch (e) {
          setError(e.message || 'error');
          clearInterval(interval);
        }
      };

      fetchResult();

      const interval = setInterval(fetchResult, INTERVAL);

      return () => {
        clearInterval(interval);
      };
    }
  }, [id]);

  let component = <div>Loading</div>;

  if (error) {
    component = error == '404' ? <div>Task is not found</div> : <div>Error, try to refresh</div>;
  }

  if (result) {
    const { status, suggestions = [] } = result;

    switch (status) {
      case statuses.IN_PROGRESS:
        component = <div>The analyzing process is still in progress. Please wait</div>;
        break;

      case statuses.ERROR:
        component = <div>Sorry we can not analyze your emails, please try in a few minutes. We can add more text + analyze again button</div>;
        break;

      default: {
        component = (
          <div className={styles.resultContainer}>
            <h3>Suggestions</h3>
            <ol>
              {suggestions.map(({ value }, index) => (
                <li key={index}>{value}</li>
              ))}
            </ol>

            {suggestions.length === 0 ? <div>Couldn&apos;t find any suggestions</div> : null}
          </div>
        );
      }
    }
  }

  return <div className={styles.container}>{component}</div>;
};

export default TaskDetails;
