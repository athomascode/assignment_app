const useValidation = () => {
  const required = (value) => {
    return (value ? undefined : 'Required')
  };
  return {
    required,
  }
}

export { useValidation };