const mongoose = require('mongoose');

const battleCardsSchema = new mongoose.Schema({
    id: String,
    data: {
        id: String,
        caseStudies: {
            caseStudiesBattleCards: [{
                cards: [{
                    cardId: String,
                    text: String,
                    cardType: String,
                    editing: Boolean,
                    height: String
                }],
                battleCardId: String,
                isEmptyAddButtonState: Boolean,
                titleValue: String,
                titleHeight: String,
                section: String,
                blueHeaderValues: [{
                    headerId: String,
                    headerText: String,
                    height: String
                }],
                redHeaderValues: [{
                    headerId: String,
                    headerText: String,
                    height: String
                }]
            }], 
        },
        battleCards: {
            objectionsBattleCards: [{
                cards: [{
                    cardId: String,
                    text: String,
                    cardType: String,
                    editing: Boolean,
                    height: String
                }],
                battleCardId: String,
                isEmptyAddButtonState: Boolean,
                titleValue: String,
                titleHeight: String,
                section: String,
                blueHeaderValues: [{
                    headerId: String,
                    headerText: String,
                    height: String
                }],
                redHeaderValues: [{
                    headerId: String,
                    headerText: String,
                    height: String
                }]
            }],
            competitorsBattleCards: [{
                cards: [{
                    cardId: String,
                    text: String,
                    cardType: String,
                    editing: Boolean,
                    height: String
                }],
                battleCardId: String,
                isEmptyAddButtonState: Boolean,
                titleValue: String,
                titleHeight: String,
                section: String,
                blueHeaderValues: [{
                    headerId: String,
                    headerText: String,
                    height: String
                }],
                redHeaderValues: [{
                    headerId: String,
                    headerText: String,
                    height: String
                }]
            }],
            profilesBattleCards: [{
                cards: [{
                    cardId: String,
                    text: String,
                    cardType: String,
                    editing: Boolean,
                    height: String
                }],
                battleCardId: String,
                isEmptyAddButtonState: Boolean,
                titleValue: String,
                section: String
            }],
            discoveriesBattleCards: [{
                cards: [{
                    cardId: String,
                    text: String,
                    cardType: String,
                    editing: Boolean,
                    height: String
                }],
                battleCardId: String,
                isEmptyAddButtonState: Boolean,
                titleValue: String,
                section: String
            }],
            isEmptyObjectionsState: Boolean,
            isEmptyCompetitorsState: Boolean,
            isEmptyProfilesState: Boolean,
            isEmptyDiscoveriesState: Boolean
        },
        isEmptyBattleCardsState: Boolean,
        isEmptyCaseStudiesState: Boolean
    }
    
})

const BattleCards = mongoose.model('BattleCards', battleCardsSchema);

module.exports = { BattleCards };