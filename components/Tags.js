import React, { useEffect, useState } from "react";
import getTools from "dependency-fetcher";

export default ({ name }) => {
  const [state, setState] = useState([]);

  const filterDependencies = (arr) => {
    let newArr = [...arr];
    newArr.map((i) => {
      console.log(i);
      if (i.package === "react") {
        newArr.unshift({
          package: i.package,
          version: "0.0.0",
        });
      }
    });
    return newArr.slice(0, 3);
  };

  useEffect(() => {
    const fetchData = async () => {
      let isCancelled = false;

      const data = await getTools("gabalicious", String(name));
      if (!isCancelled) {
        setState(data.dependencies);
      }
      return () => {
        isCancelled = true;
      };
    };
    fetchData();
  }, []);

  return (
    <div>
      {filterDependencies(state).map((i) => (
        <p key={i.package} className="package">
          <span className="dot"></span> {i.package}
        </p>
      ))}
      <style jsx>{`
        .package {
          display: inline-box;
          background: #f5f5f5fc;
          margin: 5px 10px 0 0;
          padding: 5px 10px;
          color: #000000e0;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border-radius: 20px;
        }
        .dot {
          height: 10px;
          width: 10px;
          background-color: #0070f399;
          border-radius: 50%;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};
