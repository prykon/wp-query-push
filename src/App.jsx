import "regenerator-runtime/runtime";
import "@sweetalert2/theme-wordpress-admin/wordpress-admin.css";

import { SWRConfig } from "swr";

import AppNavigator from "@/navigation/AppNavigator";

import { makeServer } from '@/services/miragejs';
import { useEffect } from "react";
if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
};

const App = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      window.wpWQP = { nonce: "123xyz" };
    };
    return;
  }, []);
  return (
    <SWRConfig 
      value={{
        refreshInterval: 3000,
        // TODO: global fetcher is not working?
        //fetcher: (resource, init) => fetch(resource, init).then(res => res.json() })
        //fetcher: url => fetch(url).then(r => r.json())
      }}
    >
      { process.env.NODE_ENV === "development" ? (
        <div className="flex flex-row">
          <div className="w-1/6 bg-neutral-700 p-4 h-screen">
            <h2 className="text-2xl text-white font-bold">MirageJS</h2>
            <ul className="list-disc list-inside text-white">
              <li><a href="/api/v1/posts">/api/v1/posts</a></li>
              <li><a href="/api/v1/posts/1">/api/v1/posts/1</a></li>
              <li><a href="/api/v1/posts/2">/api/v1/posts/2</a></li>
            </ul>
          </div>
          <div className="w-5/6 bg-neutral-200">
            <AppNavigator />
          </div>
        </div>
      ) : (
        <AppNavigator />
      )}
    </SWRConfig>
  )
}

export default App
