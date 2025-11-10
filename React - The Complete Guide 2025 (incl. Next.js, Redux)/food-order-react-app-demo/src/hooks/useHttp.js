import { useEffect, useState, useCallback } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.message || "Something went wrong, failed to send request"
    );
  }

  return resData;
}

export default function useHttp(url, config, initialData) {
  const [err, setErr] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initialData);

  const sendRequest = useCallback(
    async function sendRequest(bodyData) {
      setIsLoading(true);

      try {
        const resData = await sendHttpRequest(url, {
          ...config,
          body:
            config.method && config.method !== "GET"
              ? JSON.stringify(bodyData || {})
              : null,
        });
        setData(resData);
      } catch (error) {
        setErr(error.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    [url, config]
  );

  function clearData() {
    setData(initialData);
  }

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    err,
    sendRequest,
    clearData,
  };
}
