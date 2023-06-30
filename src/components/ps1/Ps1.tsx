import React, { useEffect, useState } from 'react';
import { useTheme } from '../../utils/themeProvider';
import { useShell } from '../../utils/shellProvider';

export const Ps1 = () => {
  const [hostname, setHostname] = useState('');
  const { theme } = useTheme();

  useEffect(() => {
    if (typeof window !== undefined) {
      setHostname(window.location.hostname);
    }
  }, []);
  const { app } = useShell();

  switch (app) {
    case 'mysql':
      return (
        <div>
          <span
            style={{
              color: theme.white,
            }}
          >
            {'mysql> '}
          </span>
        </div>
      );
    default:
      return (
        <div>
          <span
            style={{
              color: theme.yellow,
            }}
          >
            guest
          </span>
          <span
            style={{
              color: theme.white,
            }}
          >
            @
          </span>
          <span
            style={{
              color: theme.green,
            }}
          >
            {hostname}
          </span>
          <span
            style={{
              color: theme.white,
            }}
          >
            :$ ~
          </span>
        </div>
      );
  }
};

export default Ps1;
