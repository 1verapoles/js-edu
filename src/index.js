/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      if (knowsProgramming && focus=='family')  {return Math.ceil(800/config.family);}
     else if (knowsProgramming==false && focus=='family')  {return Math.ceil(1300/config.family);}
     else if (knowsProgramming && focus=='friends')  {return Math.ceil(800/config.friends);}
     else if (knowsProgramming==false && focus=='friends')  {return Math.ceil(1300/config.friends);}
     else if (knowsProgramming && focus=='normal_life')  {return Math.ceil(800/config.normal_life);}
     else if (knowsProgramming==false && focus=='normal_life')  {return Math.ceil(1300/config.normal_life);}
     else if (knowsProgramming && focus=='profession')  {return Math.ceil(800/config.profession);}
     else if (knowsProgramming==false && focus=='profession')  {return Math.ceil(1300/config.profession);}
     else if (knowsProgramming && focus=='carrier')  {return Math.ceil(800/config.carrier);}
     else if (knowsProgramming==false && focus=='carrier')  {return Math.ceil(1300/config.carrier);}
     else if (knowsProgramming && focus=='top_peformance')  {return Math.ceil(800/config.top_peformance);}
     else if (knowsProgramming==false && focus=='top_peformance')  {return Math.ceil(1300/config.top_peformance);}
  };
  
