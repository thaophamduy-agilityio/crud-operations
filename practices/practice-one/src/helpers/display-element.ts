/**
 * Show/hide element
 * @param element  element want to display
 * @param status display status
 * @param loading display loading
 */
export const displayElement = (element: HTMLElement, status: boolean, loading?: string): void => {
  const display = status ? 'block' : 'none';
  const target = loading
    ? (element.parentElement?.querySelector('.loading-indicator') as HTMLElement)
    : element;
  target.style.display = display;
};
