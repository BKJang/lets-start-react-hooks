import { useState, useCallback } from 'react';

const useInputs = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  const handleChangeElement = useCallback(e => {
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value }));
  }, []);

  const reset = useCallback(() => {
    setForm(initialForm);
  }, [initialForm]);

  return [form, handleChangeElement, reset];
}

export default useInputs;