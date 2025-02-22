import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const skills = {
  uxDesign: [
    { name: "User Research", level: 95, icon: "🔍" },
    { name: "Wireframing", level: 90, icon: "✏️" },
    { name: "Prototyping", level: 92, icon: "📱" },
    { name: "Information Architecture", level: 88, icon: "🗺️" },
    { name: "User Testing", level: 85, icon: "🎯" }
  ],
  uiDesign: [
    { name: "Visual Design", level: 95, icon: "🎨" },
    { name: "Typography", level: 90, icon: "📝" },
    { name: "Color Theory", level: 93, icon: "🌈" },
    { name: "Layout Design", level: 92, icon: "📐" },
    { name: "Animation", level: 85, icon: "✨" }
  ],
  tools: [
    { name: "Figma", level: 98, icon: "⚡" },
    { name: "Adobe XD", level: 90, icon: "💫" },
    { name: "Sketch", level: 85, icon: "💎" },
    { name: "Principle", level: 80, icon: "🔄" },
    { name: "Photoshop", level: 88, icon: "🖼️" }
  ]
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const SkillsSection = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        <div className="absolute top-40 left-20 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative">
        {/* Section Header */}
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Combining creative design with technical proficiency to deliver exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* UX Design Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 border-0">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600">
                  UX Design
                </Badge>
                <div className="space-y-3">
                  {skills.uxDesign.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-slate-200">{skill.name}</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* UI Design Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 border-0">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:from-fuchsia-600 hover:to-cyan-600">
                  UI Design
                </Badge>
                <div className="space-y-3">
                  {skills.uiDesign.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-slate-200">{skill.name}</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-fuchsia-500 to-cyan-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 border-0">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600">
                  Tools
                </Badge>
                <div className="space-y-3">
                  {skills.tools.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-slate-200">{skill.name}</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-cyan-500 to-violet-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;