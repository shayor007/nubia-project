<template>
  <div class="">
    <ModalsBigModal :Show=team_modal @cancel="close_team_modal">
      <template v-slot:title >Meet the team</template>
      <div class="block lg:flex">
        <img :src="selected_member.picture" class="p-6  rounded-full w-2/4 lg:w-1/2 mx-auto"/>
        <div>          
          <div class="text-black font-bold text-center">{{selected_member.name}} – {{selected_member.position}}</div>
          <div class="text-sm md:text-base">
            {{selected_member.content}}<br/>
            <br/>
            {{selected_member.content1}}<br/>
            <br/>
            {{selected_member.content2}}<br/>
            <br/>
            {{selected_member.content3}}<br/>
            <br/>
            {{selected_member.content4}}<br/>
          </div>
        </div>
      </div>
    </ModalsBigModal>
    <TabUppertab class=""/>
    <div class="container mx-auto relative">
      <TabMaintab class="my-2 absolute z-10"/>
    </div>

    <div class="">
        <div class="w-full bg-black bg-opacity-50 absolute h-56 md:h-96"></div>
        <img :src="require('@/images/team.jpg')" class="object-cover h-56 md:h-96 w-full justify-center" />
    </div>

    <div data-aos="zoom-in" data-aos-duration="4000" class="absolute z-20 top-28 md:top-60 text-center mx-auto w-full text-white font-medium text-3xl md:text-5xl lg:text-5xl">
        Meet The Team
    </div>

    
    <div class="p-8"></div>
    
    <div class="text-sm md:text-base block lg:flex container mx-auto max-w-7xl gap-16 px-10">

      <TeamMember v-for="member in team_members" :key="member.id" 
      :imageUrl="member.picture"
      :member_name="member.name"
      :member_position="member.position"
      :member_short="member.short"
      @ToggleModal="toggle_team_modal(member)"
      />

    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data(){
    return{
      team_modal: false,
      selected_member: '',
      team_members: [
        {
          id:1,
          picture: require('@/images/ola.png'),
          name: "Olaide Lawal",
          position: "Managing Partner",
          content:"Olaide brings significant investment and management experience to Nubia Capital. For over 15 years, Olaide has worked in strategy, implementation and investing roles – leading organizations within United States and internationally. ",
          content1:"Olaide’s specialization includes Strategy, Finance, Organizational Performance and Leadership. Olaide’s experience has spanned a number of industries including financial services, technology, media, healthcare, manufacturing, oil & gas and construction.",
          content2:"Olaide cofounded Barah Capital Partners a private investment firm. He also took an operating role as President of Unified Dental Care, a Barah Capital Partners portfolio company.",
          content3:"Olaide sits on the board of several companies in the healthcare, technology, retail and fitness industries. Prior to being in private investments, Olaide worked at one of the largest multibillion dollar semiconductor companies where he facilitated the achievement of some of the organization's highest-level initiatives. Prior to working in semiconductors, Olaide worked for Accenture (one of the World’s Most Admired Companies on FORTUNE’s list) as a management consultant on various value creation engagements.",
          content4:"Olaide holds an MBA from the Gies College of Business at the University of Illinois Urbana-Champaign, where he was a Dean’s Fellow. Olaide also holds a Bachelor of Science in Civil Engineering from the University of Lagos.",
          short: "Olaide brings significant investment and management experience to Nubia Capital. For over 15 years, Olaide has worked in strategy, implementation and investing roles – leading organizations within..."
        },

        {
          id:2,
          picture: require('@/images/teem.png'),
          name: "Davidson Oturu",
          position: "Co-Managing Partner",
          content: "Davidson is an experienced corporate lawyer, financier and investor. He is invested in a number of tech startups and serves as an angel investor/advisor to a number of companies.",
          content1:"He was for several years a partner at AELEX, one of the largest and reputable law firms in Nigeria and Ghana where he headed the firm’s Startups, Innovation and Technology Practice.",
          content2:"During his time at AELEX, he led the team that drafted the Nigeria Startup Bill, one of the most prolific laws that directly addresses the regulatory and financial challenges that affect tech-enabled startups. He was also part of the Committee set up by the Securities and Exchange Commission that created a framework for the use of fintech in the Nigerian capital market.",
          content3:"He has over fifteen years’ experience in advising established businesses and startups in different areas of regulatory compliance, law and management. He provides practical advice to clients in a variety of industries including fintech, media, telecommunications, information technology, private equity, financial services and capital markets. His areas of special interest include fintech, business regulatory compliance, intellectual property, international business, securities & corporate finance. He writes in different journals, texts and publication platforms and is a frequent speaker at local and international events.",
          content4: "Davidson has an LL.B from University of Ibadan, an LL.M in International Business Law from University of Cumbria, and an MBA from Queen Mary University of London.",
          short: "Davidson is an experienced corporate lawyer, financier and investor. He is invested in a number of tech startups and serves as an angel investor/advisor to a number of companies. He was for several years a partner ....."
        },
      ]
    }
  },
  methods:{

    toggle_team_modal(member){
      this.team_modal = true;
      this.selected_member = member
    },

    close_team_modal(){
      this.team_modal = false;
    }
  }
}
</script>

<style>
body{
  font-family: "Montserrat" san-serif;
}
</style>

