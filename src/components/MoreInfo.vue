<template>
    <v-container grid-list-lg class="more-info-container pa-10" fluid>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-bold my-5">What we do</v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm12 md4>
                <v-card mx-auto class="pa-4">
                     <v-icon black class="icon" style="font-size: 5rem" color="black" aria-hidden>mdi-laptop</v-icon>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-2 font-weight-bold">Creating great website<br> experiences</h3>
                            <div class="font-weight-light">Our programming squad plays with cutting edge technology and innovative ideas. We have deep insights into many industries and an expert UX/UI team ready to roll
                            </div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card mx-auto class="pa-4">
                     <v-icon black class="icon" style="font-size: 5rem" color="black" aria-hidden>mdi-drawing</v-icon>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-2 font-weight-bold">Building a memorable <br> brand design</h3>
                            <div class="font-weight-light">Creating the entire brand identity of a business is an exciting task, and we can build out all aspects covering the logo/mark, brand guidelines, and related print materials.
                            </div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card mx-auto class="pa-4">
                     <v-icon black class="icon" style="font-size: 5rem" color="black" aria-hidden>mdi-web</v-icon>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-2 font-weight-bold">Capture attention and drive<br> conversions wordwide</h3>
                            <div class="font-weight-light">we can craft a powerful message that will capture attention and drive conversions. We help brands enrich and amplify the way they communicate with the world. 
                            </div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'MoreInfo'
};
</script>

<style scoped>
    .icon {
        font-size: 4rem;
        
    }
    .v-card, .v-sheet {
        text-align: center;
    }
    .v-card__title {
        text-align: left;
    }
    /* .headline {
        text-align: center;
    } */
    .more-info-container {
        
       
    }

</style>