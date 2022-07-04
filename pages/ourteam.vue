<template>
  <div class="relative">
    <TabUppertab class=""/>
    <div class="container mx-auto relative">
      <TabMaintab class="my-2 absolute z-10"/>
    </div>

    <div class="">
        <div class="w-full bg-primary-100 bg-opacity-50 absolute h-96"></div>
        <img :src="require('@/images/team.jpg')" class="object-cover h-96 w-full justify-center" />
    </div>

    <div class="absolute z-20 top-52 text-center mx-auto w-full text-white text-4xl font-medium lg:text-5xl xl:text-6xl">
        Meet The Team
    </div>

    <div class="p-8"></div>
    
    <div class=" block lg:flex container mx-auto max-w-7xl gap-16 px-10">
        <div class="lg:w-1/2 shadow-md p-6">
            <div class="w-full w-">
                <img :src="require('@/images/teem.png')" class="rounded-full w-72 mx-auto" />
            </div>
    
            <div class="p-4"></div>

            <div class="text-primary-100 font-bold text-center mx-auto">Olaide Lawal – Managing Partner</div>

            <div class=" block pt-8 text-left rounded-sm">
                

        Olaide brings significant investment and management experience to Nubia Capital. For over 15 years, Olaide has worked in strategy, implementation and investing roles – leading organizations within United States and internationally. Olaide’s specialization includes Strategy, Finance, Organizational Performance and Leadership. Olaide’s experience has spanned a number of industries including financial services, technology, media, healthcare, manufacturing, oil & gas and construction.

        Olaide cofounded Barah Capital Partners a private investment firm. He also took an operating role as President of Unified Dental Care, a Barah Capital Partners portfolio company. Olaide seats on the board of several companies in the healthcare, technology, retail and fitness industries.  Prior to being in private investments, Olaide worked at one of the largest multibillion dollar semiconductor companies where he facilitated the achievement of some of the organization's highest-level initiatives. Prior to working in semiconductors, Olaide worked for Accenture (one of the World’s Most Admired Companies on FORTUNE’s list) as a management consultant on various value creation engagements.


        Olaide holds an MBA from the Gies College of Business at the University of Illinois Urbana-Champaign, where he was a Dean’s Fellow. Olaide also holds a Bachelor of Science in Civil Engineering from the University of Lagos.

            </div>

            <button class="bg-primary-100 text-white flex justify-center mx-auto p-1 text-center rounded-md">READ MORE</button>
        </div>

        <div class="mt-16 lg:mt-0 lg:w-1/2 shadow-md px-6 p-6">
            <div class=" w-full w-72">
                <img :src="require('@/images/teem.png')" class="rounded-full w-72 mx-auto" />
            </div>


            <div class="p-4"></div>

            <div class="text-primary-100 font-bold text-center mx-auto">Davidson Oturu – Co-Managing Partner </div>
            <div class=" block pt-8 text-left rounded-sm">

       Davidson is an experienced corporate lawyer, financier and investor. He was for several years a partner at AELEX, one of the largest and reputable law firms in Nigeria and Ghana where he headed the firm’s Startups, Innovation and Technology Practice.  

During his time at AELEX, he led the team that drafted the Nigeria Startup Bill, one of the most prolific laws that directly addresses the regulatory and financial challenges that affect tech-enabled startups. He was also part of the Committee set up by the Securities and Exchange Commission that created a framework for the use of fintech in the Nigerian capital market. 

He has over fifteen years’ experience in advising established businesses and startups in different areas of regulatory compliance, law and management. He  provides practical advice to clients in a variety of industries including fintech, media, telecommunications, information technology, private equity, financial services and capital markets.

He is also invested in a number of tech startups and serves as an angel investor/advisor to a number of companies.  His areas of special interest include fintech, business regulatory compliance, intellectual property, international business, securities & corporate finance.

He writes in different journals, texts and publication platforms and is a frequent speaker at local and international events. 

Davidson has an LL.B from University of Ibadan, an LL.M in International Business Law from University of Cumbria, and an MBA from Queen Mary University of London.

            </div>

            <button class="bg-primary-100 text-white flex justify-center mx-auto p-1 text-center rounded-md">READ MORE</button>

            <div class="p-4"></div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  body{
    font-family: "Poppins", sans-serif;
  }
</style>

