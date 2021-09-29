// Based on custom `withSentry` implementation from anguskeatinge from
// https://github.com/getsentry/sentry-javascript/issues/3917#issuecomment-928911850

import * as Sentry from "@sentry/nextjs";

export const customWithSentry = (handler) => {
  return async (req, res) => {
    try {
      return await handler(req, res);
    } catch (error) {
      Sentry.captureException(error);

      return new Promise((_, reject) => {
        Sentry.flush(2000).finally(() => {
          reject(error);
        });
      });
    }
  };
};
