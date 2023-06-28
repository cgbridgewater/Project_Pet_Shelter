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
    <div style={{padding:"3px",border:" 2px solid #073DAA"}}>
      <GitHubCalendar
        transformData={selectLastHalfYear} 
        username="cgbridgewater" 
        hideTotalCount
        style={{margin:"5px 3px", width:"360px"}}
        theme={minimalTheme}
      />
      <hr style={{border:"1px solid #A483EF", width:"90%", margin:"0 auto"}} />
      <img style={{width:"360px", marginTop:"5px"}}  src="https://github-readme-streak-stats.herokuapp.com/?user=cgbridgewater&theme=tokyonight&hide_border=false" alt="" />
    </div>
  )
}

export default GitHub