<template>
    <span>
      <HomeHero></HomeHero>
      <HomeIntro></HomeIntro>
      <HomeProjects></HomeProjects>
      <MoreInfo></MoreInfo>
      <ClientsReviews></ClientsReviews>
      <Footer></Footer>
    </span>
    
</template>

<script>
// @ is an alias to /src
import HomeHero from '@/components/HomeHero.vue'
import HomeIntro from '@/components/HomeIntro.vue'
import HomeProjects from '@/components/HomeProjects.vue'
import MoreInfo from '@/components/MoreInfo.vue'
import ClientsReviews from '../components/ClientsReviews.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'Home',
  components: {
    HomeHero,
    HomeIntro,
    HomeProjects,
    MoreInfo,
    ClientsReviews,
    Footer,
  }
}
</script>
