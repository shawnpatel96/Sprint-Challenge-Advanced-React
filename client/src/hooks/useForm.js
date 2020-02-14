import useLocalstorage  from "./useLocalStorage"


export const useForm = (key,initialValue)=>{
    const [values, setValues] = useLocalstorage(key, initialValue);

    const handleChanges = e => {
        setValues({
          ...values,
          [e.target.name]: e.target.value
        });
      };

      return[values, handleChanges]
    
}

