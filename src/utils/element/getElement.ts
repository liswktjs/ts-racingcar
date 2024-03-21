export const getElement = (id: string): Element | null => {
  const element = document.getElementById(id);

  return element;
};
