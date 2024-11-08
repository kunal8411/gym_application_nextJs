import axios from "axios";
import { useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ url, method, body, onSuccess, onError }) => {
  // method === "post", "get", "patch"
  const [errors, setErrors] = useState(null);

  const doRequest = async (props = {}) => {
    try {
      setErrors(null);
      const response = await axios[method](url, { ...body, ...props });

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
        if(onError){
            onError(err)  
        }
    //   setErrors(
    //     <div className="alert alert-danger">
    //       <h4>Ooops...</h4>
    //       <ul className="my-0">
    //         {err?.response?.data?.errors?.map((err) => (
    //           <li key={err.message}>{err.message}</li>
    //         ))}
    //       </ul>
    //     </div>
    //   );
    }
  };

  return { doRequest, errors };
};