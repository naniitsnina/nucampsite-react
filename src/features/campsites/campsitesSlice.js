import CAMPSITES from '../../app/shared'

export const selectAllCampsites = () => {
    return CAMPSITES
}

export const singleRandomCampsite = () => {
    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random )]
}