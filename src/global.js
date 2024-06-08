export const standard = (()=>{
  let standard = true;
  const isStandard = () => {
    return standard;
  }
  const toggleStandard = () => standard = !standard
  return {isStandard, toggleStandard}
})();