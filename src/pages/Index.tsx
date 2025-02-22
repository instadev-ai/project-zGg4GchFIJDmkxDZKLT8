import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useRef } from "react";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projects = [
    {
      title: "E-Commerce Redesign",
      category: "ux",
      image: "/placeholder.svg",
      description: "Complete user experience overhaul for an e-commerce platform",
      color: "from-purple-500/20 to-blue-500/20"
    },
    {
      title: "Banking App",
      category: "ui",
      image: "/placeholder.svg",
      description: "Modern banking application interface design",
      color: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "Travel Platform",
      category: "ux",
      image: "/placeholder.svg",
      description: "User-centered travel booking experience",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Health Dashboard",
      category: "ui",
      image: "/placeholder.svg",
      description: "Healthcare analytics dashboard design",
      color: "from-blue-500/20 to-indigo-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-background" ref={containerRef}>
      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex items-center justify-center relative px-4 py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute inset-0 -z-10"
          style={{ y, opacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background backdrop-blur-3xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
          </div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        </motion.div>
        
        <div className="container relative z-10 max-w-4xl">
          <motion.div 
            className="text-center space-y-8"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <motion.span 
                className="inline-block text-lg text-primary font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                UX/UI Designer
              </motion.span>
              <motion.h1 
                className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Hi, I'm Sarah
              </motion.h1>
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Crafting beautiful digital experiences through thoughtful design and creative innovation
            </motion.p>
            
            <motion.div
              className="flex items-center justify-center gap-4"
              variants={fadeInUp}
            >
              <Button 
                size="lg" 
                className="px-8 py-6 text-lg relative overflow-hidden group"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 text-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-background to-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background" />
        <div className="container relative">
          <motion.div 
            className="text-center space-y-4 mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Selected Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my passion for creating intuitive and beautiful digital experiences
            </p>
          </motion.div>

          <motion.div 
            className="flex justify-center gap-4 mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {["all", "ux", "ui"].map((filter) => (
              <Button 
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className="px-6 py-2 text-lg capitalize transition-all duration-300"
              >
                {filter === "all" ? "All Projects" : `${filter.toUpperCase()} Design`}
              </Button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects
              .filter(project => activeFilter === "all" || project.category === activeFilter)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden group cursor-pointer border-0 bg-gradient-to-br from-background to-muted">
                    <motion.div 
                      className="relative aspect-[16/10] overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <p className="text-primary text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          View Project
                        </p>
                      </div>
                    </motion.div>
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
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
        className="py-32 px-4 relative overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-background" />
        <div className="container relative text-center max-w-3xl">
          <motion.div 
            className="space-y-8"
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a project in mind? I'd love to help bring your ideas to life through thoughtful design and creative solutions.
            </p>
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Start a Conversation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;