import { getQuery } from '../../api';

export const mysql = async (cmd: string | null): Promise<string> => {
  if (!cmd) {
    return `Welcome to the MySQL monitor.  Commands end with ; or \\g.
Your MySQL connection id is 8
Server version: 5.1.10-alpha-msql-proxy Greptime

Copyright (c) 2000, 2023, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.`;
  } else {
    return await getQuery(cmd);
  }
};
