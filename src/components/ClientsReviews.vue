<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <v-carousel
                :continuous="true"
                cycle
                interval ="4000"
                :show-arrows="false"
                hide-delimiters
                progress
                height="300"
            >
                <v-carousel-item
                v-for="individuo in individuos"
                :key="individuo.id"
                >
                    <v-sheet
                        
                        height="100%"
                        tile
                    >
                        <v-row
                        class="fill-height"
                        align="center"
                        justify="space-around"
                        >
                        <div align="center">
                            <img :src="individuo.foto" class="thumbnail">
                            <div class="title my-3"> 
                                {{ individuo.nombre}} {{ individuo.apellido}}
                                
                        </div>
                        </div>
                        <div class="title subtitle-1 font-italic pb-6" align="center"> 
                                {{ opiniones[individuo.id] }}
                        </div>
                    
                        </v-row>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </v-layout>
    <!-- <pre>{{$data.individuos}}</pre> -->
    </v-container>
</template>
<script>
    import axios from 'axios';
    export default {
        name: 'ClientsReviews',
        
        data() {
            return {
                individuos: '',
                opiniones: [
                    'Integer vulputate leo nec augue auctor suscipit. Donec vel lacinia mauris.',
                    'Vestibulum eget viverra nunc. Phasellus commodo venenatis lacus.',
                    'Cras vulputate nulla magna, fringilla feugiat felis feugiat in.',
                    'Proin tempor quam aliquet eros auctor, vel finibus nibh pharetra.',
                    'Nulla scelerisque at tortor in porta. Integer sagittis sapien libero, eget auctor orci venenatis sit amet.',
                    ],
            };
        },
        mounted() {
                
                this.getUsers();
               
            },
           
        methods: {
            getUsers() {
                axios.get('https://randomuser.me/api/?results=5')
                .then(response => {
                    this.individuos = response.data.results.map((individuo, index) => {
                        return {
                            nombre: individuo.name.first,
                            apellido: individuo.name.last,
                            foto: individuo.picture.medium,
                            id: index
                        }
                    });
                })
                .catch(e=> console.log(e))
            }
        }
    };
</script>
<style scoped>
    .layout.wrap {
        padding-bottom: 5%;
    }
    img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
    }

    .theme--dark.v-sheet[data-v-8b18ecba] {
        background-color: #efeded;
        border-color: #efeded;
        color: black;
        border-radius: 4px !important;
    }
    .row {
        padding: 0rem 2rem;
    }
   .theme--dark.v-btn.v-btn--icon {
    color: #363535;
    }

</style>