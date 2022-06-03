import Button from './Button'

const yearsData = [1, 3, 5, 7, 10]

const SpendingYears = ({handleClick, displayedYears}) => {
    return(
        <div className="years-container">
            {yearsData.map(year => (
                <Button key={year} isActive={year === displayedYears} handleClick={ ()=>handleClick(year)} label={`${year} ${year > 1 ? 'years' : 'year'}`}/>
            ))}
        </div>
    )
}
export default SpendingYears