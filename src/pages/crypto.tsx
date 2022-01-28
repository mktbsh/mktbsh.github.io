import { useEffect, useMemo, useRef, useState } from "react";

type WorkerMessage = {
  type: "encoded" | "decoded";
  value: string;
};

const CryptoPage = () => {
  const worker = useRef<Worker>();
  const [message, setMessage] = useState<string>();
  const [reEncode, setReEncode] = useState<boolean>(false);
  const [result, setResult] = useState<WorkerMessage>();

  const resultText = useMemo(() => {
    if (!result) return;
    if (result.type === "encoded") {
      return reEncode ? encodeURIComponent(result.value) : result.value;
    }
    if (result.type === "decoded") {
      return result.value;
    }
  }, [result, reEncode]);

  useEffect(() => {
    if (worker.current) return;

    worker.current = new Worker("/rawinflate.worker.js");
    worker.current.addEventListener(
      "message",
      ({ data }: { data: WorkerMessage }) => {
        setResult(data);
      }
    );
  }, []);

  const handleEncClick = async () => {
    if (!worker.current) return;
    if (!message) return;
    worker.current.postMessage({
      type: "deflate",
      message,
    });
  };

  const handleDecClick = () => {
    if (!worker.current) return;
    if (!message) return;
    const msg = reEncode ? decodeURIComponent(message) : message;
    worker.current.postMessage({
      type: "inflate",
      message: msg,
    });
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-12 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="md:col-span-2 flex-1">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Text
                  </label>
                  <label className="inline-flex items-center mt-3">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-gray-600"
                      checked={reEncode}
                      onChange={(e) => setReEncode(e.currentTarget.checked)}
                    />
                    <span className="ml-2 text-gray-700">re-encode</span>
                  </label>
                  <div className="mt-1 h-64">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full h-full p-2 sm:text-sm border border-gray-300 rounded-md"
                      value={message}
                      onInput={(e) => setMessage(e.currentTarget.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="button"
                  onClick={handleEncClick}
                  className="inline-flex justify-center py-2 px-4 mx-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  encode
                </button>
                <button
                  type="button"
                  onClick={handleDecClick}
                  className="inline-flex justify-center py-2 px-4 mx-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  decode
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex-1 bg-gray-100 lg:h-auto h-64 rounded p-4">
            <textarea
              className="w-full h-full border-2 border-dashed border-white-800 rounded p-4"
              value={resultText}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoPage;
