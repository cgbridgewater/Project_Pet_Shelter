import GitHubCalendar from 'react-github-calendar';

const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;
  
    return contributions.filter(activity => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

const minimalTheme = {
light: ['hsl(0, 0%, 92%)', '#0216ED'],
dark: ['hsl(0, 0%, 92%)', 'lightblue'],
}

const GitHub = () => {

  return(  
    <div id='GitHubContainer' style={{padding:"3px",border:" 2px solid #073DAA"}}>
      <GitHubCalendar
        id="GitCalendar"
        transformData={selectLastHalfYear} 
        username="cgbridgewater" 
        hideTotalCount
        style={{margin:"5px auto", minWidth:"260px"}}
        theme={minimalTheme}
      />
      <hr style={{border:"1px solid #A483EF", width:"90%", margin:"0 auto"}} />
      <img className='GitHub' src="https://github-readme-streak-stats.herokuapp.com/?user=cgbridgewater&theme=tokyonight&hide_border=false" alt="github graph" loading="lazy" />
    </div>
  )
}

export default GitHub