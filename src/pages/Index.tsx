import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const projects = [
    {
      title: "E-Commerce Redesign",
      category: "ux",
      image: "/placeholder.svg",
      description: "Complete user experience overhaul for an e-commerce platform"
    },
    {
      title: "Banking App",
      category: "ui",
      image: "/placeholder.svg",
      description: "Modern banking application interface design"
    },
    {
      title: "Travel Platform",
      category: "ux",
      image: "/placeholder.svg",
      description: "User-centered travel booking experience"
    },
    {
      title: "Health Dashboard",
      category: "ui",
      image: "/placeholder.svg",
      description: "Healthcare analytics dashboard design"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex items-center justify-center relative px-4 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-3xl" />
        </div>
        
        <div className="container relative z-10">
          <motion.div 
            className="text-center"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm Sarah
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              UX/UI Designer crafting beautiful digital experiences
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button size="lg" className="mr-4">View My Work</Button>
              <Button variant="outline" size="lg">Contact Me</Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <section className="py-20 px-4">
        <div className="container">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            Selected Works
          </motion.h2>

          <motion.div 
            className="flex justify-center gap-4 mb-12"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <Button 
              variant={activeFilter === "all" ? "default" : "outline"}
              onClick={() => setActiveFilter("all")}
            >
              All
            </Button>
            <Button 
              variant={activeFilter === "ux" ? "default" : "outline"}
              onClick={() => setActiveFilter("ux")}
            >
              UX Design
            </Button>
            <Button 
              variant={activeFilter === "ui" ? "default" : "outline"}
              onClick={() => setActiveFilter("ui")}
            >
              UI Design
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(project => activeFilter === "all" || project.category === activeFilter)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden group cursor-pointer">
                    <motion.div 
                      className="relative aspect-video overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-primary-foreground text-lg font-medium">
                          View Project
                        </p>
                      </div>
                    </motion.div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <motion.section 
        className="py-20 px-4 bg-muted/50"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Have a project in mind? I'd love to help bring your ideas to life.
          </p>
          <Button size="lg">Get in Touch</Button>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;