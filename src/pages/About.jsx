"use client"

import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Linkedin, Instagram, Github, MessageSquare, Link } from "lucide-react"
import AnimatedIcon from "../components/AnimatedIcon"
import CallNowPopup from "../components/CallNowPopup"

export default function About() {
  const location = useLocation()

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [location])

  const developers = [
    {
      name: "Krishna Jagtap",
      role: "Full Stack Developer",
      bio: "Experienced full-stack developer with expertise in React, Node.js, and machine learning integration.",
      image: "/krishna.jpeg?height=400&width=400",
      socialLinks: [
        { icon: <Linkedin className="h-5 w-5" />, hoverIcon: <Linkedin className="h-5 w-5 text-blue-600" />, url: "https://www.linkedin.com/in/krishna-jagtap-074964262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        {
          icon: <Instagram className="h-5 w-5" />,
          hoverIcon: <Instagram className="h-5 w-5 text-pink-600" />,
          url: "https://www.instagram.com/krishnajagtap9?utm_source=qr&igsh=MTJoZXZnaTkxeWUwag==",
        },
        {
          icon: <Github className="h-5 w-5" />,
          hoverIcon: <Github className="h-5 w-5 text-gray-900 dark:text-white" />,
          
        },
      ],
    },
    {
      name: "Krish Bhagat",
      role: "Machine Learning Expert",
      bio: "Specialized in computer vision and gesture recognition with a focus on accessibility technologies.",
      image: "/bhagat.jpeg?height=400&width=400",
      socialLinks: [
        { icon: <Linkedin className="h-5 w-5" />, hoverIcon: <Linkedin className="h-5 w-5 text-blue-600" />, url: "https://www.linkedin.com/in/krish-bhagat-47512a289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        {
          icon: <Instagram className="h-5 w-5" />,
          hoverIcon: <Instagram className="h-5 w-5 text-pink-600" />,
          url: "https://www.instagram.com/krish_bh_agat?igsh=MXdrZG90Y3dsdXkwNA==",
        },
        
        {
          icon: <Github className="h-5 w-5" />,
          hoverIcon: <Github className="h-5 w-5 text-gray-900 dark:text-white" />,
          url: "https://github.com/apniprogrammingyt09",
        },
        
      ],
    },
    {
      name: "Kishan Chandravanshi",
      role: "Dataset Annotator",
      bio: "Expert in Indian Sign Language with extensive experience in dataset creation and annotation for ML models.",
      image: "/kishan.jpeg?height=400&width=400",
      socialLinks: [
        { icon: <Linkedin className="h-5 w-5" />, hoverIcon: <Linkedin className="h-5 w-5 text-blue-600" />, url: "https://www.linkedin.com/in/kishan-chandravanshi-85ab40352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        {
          icon: <Instagram className="h-5 w-5" />,
          hoverIcon: <Instagram className="h-5 w-5 text-pink-600" />,
          url: "https://www.instagram.com/kishan.chandravanshi.18?igsh=MW82a2pmejc4ejNhag==",
        },
       
        {
          icon: <Github className="h-5 w-5" />,
          hoverIcon: <Github className="h-5 w-5 text-gray-900 dark:text-white" />,
        },
        
      ],
    },
  ]

  return (
    <div className="pt-20  overflow-x-hidden" >
      {/* Call Now Popup */}
      <CallNowPopup phone="+917440780233" delay={2000} />

    {/* Hero Section */}
<section 
  className="relative py-16 md:py-24 bg-cover bg-center bg-no-repeat" data-aos="fade"
  style={{ backgroundImage: "url('https://mondo.com/wp-content/uploads/2023/10/innovations-in-human-machine-interaction-2023-768x403.jpg')" }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-white dark:from-primary/40 dark:to-gray-900"></div>

  {/* Content */}
  <div className="relative container mx-auto px-4 text-center">
    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-white" data-aos="zoom-in-up">
      About Vanni Sahayak
    </h1>
    <p className="max-w-3xl mx-auto text-lg text-white/90" data-aos="fade">
      Bridging communication gaps through innovative technology and making Indian Sign Language accessible to everyone.
    </p>
  </div>
</section> 

      {/* Mission Section */}
      <section className="py-16 md:py-24" >
        <div className="container mx-auto px-4" data-aos="fade-up" data-aos-offset="200">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                At Vanni Sahayak, our mission is to break down communication barriers for the deaf and hard of hearing
                community in India through innovative technology solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We believe that everyone deserves equal access to communication, and our AI-powered platform is designed
                to make Indian Sign Language translation accessible, accurate, and easy to use.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Through continuous research and development, we strive to improve our technology and expand our impact,
                creating a more inclusive world for all.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl" >
              <img data-aos="zoom-out-up" data-aos-delay="500" data-aos-offset="200"
                src="https://www.freshconsulting.com/wp-content/uploads/2021/02/Human-Machine-Interaction-How-AI-Is-Revolutionizing-Tech-scaled-1-scaled.jpg?height=600&width=800"
                alt="Our mission visualization"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900" >
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">How Our ML Model Works</h2>

    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/30 transform -translate-x-1/2 hidden md:block"></div>

      <div className="space-y-12">
        {[
          {
            title: "Data Collection",
            description:
              "We've collected and annotated thousands of Indian Sign Language gestures to train our machine learning models.",
            image: "/image1.jpeg?height=300&width=500",
          },
          {
            title: "Model Training",
            description:
              "Using computer vision and deep learning techniques, we train our models to recognize hand gestures with high accuracy.",
            image: "/image4.jpeg?height=300&width=500",
          },
          {
            title: "Real-time Processing",
            description:
              "Our system processes video input in real-time, detecting and tracking hand movements to interpret sign language.",
            image: "https://miro.medium.com/v2/resize:fit:1400/0*kYlCzhNLBbYqO6cB.png?height=300&width=500",
          },
          {
            title: "Translation Output",
            description:
              "The recognized gestures are translated into text, enabling seamless communication between signers and non-signers.",
            image: "/translation_output.jpeg?height=300&width=500",
          },
        ].map((item, index) => (
          <div key={index} className="relative">
            <div className={`md:flex items-center ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
              {/* Text Content */}
              <div className="md:w-1/2 p-4" data-aos="fade" data-aos-delay="200">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary hidden md:block"></div>

              {/* Image with Slide Animation */}
              <div
                className="md:w-1/2 p-4"
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                data-aos-delay="200"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="rounded-xl shadow-md w-full h-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {developers.map((developer, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
              >
             <img
  src={developer.image || "/placeholder.svg"}
  alt={developer.name}
  className="w-full h-64 rounded-lg object-contain object-top p-2 "
/>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{developer.name}</h3>
                  <p className="text-primary font-medium mb-3">{developer.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{developer.bio}</p>

                  <div className="flex space-x-4">
                    {developer.socialLinks.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        className="text-gray-500 hover:text-primary transition-colors"
                        aria-label={`${developer.name}'s social link`}
                      >
                        <AnimatedIcon defaultIcon={link.icon} hoverIcon={link.hoverIcon} className="h-8 w-8" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Timeline Section */}
     <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">
      The Importance of Indian Sign Language
    </h2>

    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary/30 md:left-1/2 md:transform md:-translate-x-1/2"></div>

      <div className="space-y-12">
        {[
          {
            year: "Cultural Identity",
            title: "A Unique Linguistic Heritage",
            description:
              "Indian Sign Language (ISL) is a vital part of deaf culture in India, with its own grammar, syntax, and regional variations.",
          },
          {
            year: "Education",
            title: "Access to Learning",
            description:
              "ISL enables deaf students to access education and develop cognitive skills essential for academic and personal growth.",
          },
          {
            year: "Social Inclusion",
            title: "Building Communities",
            description:
              "ISL fosters community building and social inclusion, allowing deaf individuals to participate fully in society.",
          },
          {
            year: "Employment",
            title: "Economic Empowerment",
            description:
              "Proficiency in ISL opens employment opportunities and enables workplace communication for deaf professionals.",
          },
        ].map((item, index) => (
          <div key={index} className="relative pl-20 md:pl-0">
            {/* Timeline Year Badge - Updated size and text */}
            <div className="absolute left-0 top-0 flex items-center justify-center w-24 h-24 rounded-full bg-primary text-primary-foreground font-bold md:left-1/2 md:transform md:-translate-x-1/2">
              <span className="text-xs">{item.year}</span>
            </div>

            {/* Text Block with AOS Animation */}
            <div
              className={`md:w-5/12 ${index % 2 === 0 ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12 md:text-right"}`}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-delay="200"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


   {/* CTA Section */}
<section
  className="relative py-16 md:py-24 text-white bg-cover bg-center bg-no-repeat" data-aos="fade"  data-aos-offset="200"
  style={{ backgroundImage: "url('https://mondo.com/wp-content/uploads/2023/10/innovations-in-human-machine-interaction-2023-768x403.jpg')" }}
>
  {/* Overlay for better readability */}
  <div className="absolute inset-0 bg-black/50" ></div>

  <div className="relative container mx-auto px-4 text-center" data-aos="zoom-in-up">
    <h2 className="text-3xl font-bold mb-6">Join Us in Our Mission</h2>
    <p className="max-w-2xl mx-auto mb-8">
      Help us break down communication barriers and create a more inclusive world for the deaf and hard-of-hearing community.
    </p>
   
  </div>
</section>

    </div>
  )
}

