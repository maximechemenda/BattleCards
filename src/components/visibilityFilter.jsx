//THIS FILE IS NOT USED, I HAVE NEVER USED IT, IT CAME WITH THE REDUX TUTORIAL, I JUST COPIED IT IN CASE I WOULD NEED SOMETHING SIMILAR


/* import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../redux/actions'
import { Filters } from '../redux/actionTypes'

function VisibilityFilter({ activeFilter, setFilter }) {
    return (
        Filters.map((filter, i) => (
            <button
                className={filter === activeFilter ? 'active' : ''}
                onClick={() => setFilter(filter)}
                key={`filter-${i}`}>
                {filter}
            </button>
        ))
    )
}

const mapState = (state) => ({ activeFilter: state.visibilityFilter.activeFilter })
export default connect(mapState, { setFilter })(VisibilityFilter)
 */