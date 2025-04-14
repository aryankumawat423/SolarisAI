const getTiltandEnergy = (long: number, lat: number) => {
    const tilt = Math.floor(Math.random() * (120 - 40 + 1)) + 40; 
    const energy = parseFloat((Math.random()).toFixed(2)); 
    return { tilt, energy };
  };
  
  export { getTiltandEnergy };
  