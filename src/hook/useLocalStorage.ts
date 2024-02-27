import { useState, useEffect } from "react";
import { IUserContext } from "../context/users.context.props";

export const useLocalStorage = (key: string) => {
  const [data, setData] = useState<IUserContext[] | null>(null);

  useEffect(() => {
    const itemFromLocalStorage = localStorage.getItem(key);
    if (itemFromLocalStorage === null) {
      saveData([]);
      return;
    }
    const res = JSON.parse(itemFromLocalStorage);
    setData(res);
  }, [key]);
  const saveData = (newData: IUserContext[]) => {
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };

  return [data, saveData] as const;
};
