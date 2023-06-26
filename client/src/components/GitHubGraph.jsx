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
        <div>
            <GitHubCalendar
                transformData={selectLastHalfYear} 
                username="cgbridgewater" 
                hideTotalCount
                style={{margin:"15px 0", width:"370px"}}
                theme={minimalTheme}
                />
        </div>
    )
}

export default GitHub