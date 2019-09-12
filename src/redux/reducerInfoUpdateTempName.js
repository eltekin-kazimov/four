import store from './store';


const UpdateTempName = 'UpdateTempName';

export function createActionUpdateTempName(value){
    return {type: UpdateTempName, body: value};
}