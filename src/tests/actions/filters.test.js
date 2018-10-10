import {
    setStartDate,
    setEndDate,
    setTextFilter,
    sortByAmount, 
    sortByDate 
} from '../../actions/filters';
import moment from 'moment';

test('should generate action start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate action end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate action filter by text action object with text value', () => {
    const text = 'test value'
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: text
    });
});

test('should generate action filter by text action object with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate action sort by amount action object', () => {
   const action = sortByAmount();
   expect(action).toEqual({
       type: 'SORT_BY_AMOUNT'
   }); 
});

test('should generate action sort by amount action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    }); 
 });


