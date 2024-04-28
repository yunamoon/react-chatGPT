export const getStringDate = (TargetDate) => {
    let year = TargetDate.getFullYear();
    let month = TargetDate.getMonth()+1;
    let date = TargetDate.getDate();

    if(month < 10) {
        month = `0${month}`;
    }
    if(date < 10) {
        date = `0${date}`;
    }

    return`${year}-${month}-${date}`;
};