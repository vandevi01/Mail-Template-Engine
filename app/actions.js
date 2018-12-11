import { cpService } from "./services/dataService";

export let actions = {
    SET_MERGE_TAGS: 'SET_MERGE_TAGS',
    MERGE_TAGS_FETCHING_IN_PROGRESS: 'MERGE_TAGS_FETCHING_IN_PROGRESS'
};

export function setMergeTags(mergeTags) {
    return {
        type: actions.SET_MERGE_TAGS,
        data: mergeTags
    };
}

// Fetching Merge Tags - as merge tags are shown on 2 pages
// These can be fetched only once and loaded into store
export function fetchMergeTags() {
    return dispatch => {
        cpService.get("getMergeTags").then(({mergeTags}) => {
            dispatch(setMergeTags(mergeTags));
        }).catch(() => {
            // do nothing in case of error
        });
    };
}
