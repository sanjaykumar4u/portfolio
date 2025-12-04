// ========== SITE CONFIG (EDIT THIS) ==========
const siteConfig = {
  name: "Sanjay Kumar",
  hero: {
    title: "Hi, I'm Sanjay Kumar",
    subtitle: "Aspiring DevOps Engineer | Cloud | CI/CD | Linux",
    text: "I design, automate, and manage cloud infrastructure from first principles.",
    tags: ["AWS", "Docker", "Kubernetes", "Linux", "CI/CD", "GitHub Actions"]
  },

  resume: "assets/Sanjay-Kumar-Resume.pdf",

  skills: [
    {
      category: "Cloud & AWS",
      items: ["EC2", "S3", "VPC", "IAM", "Lambda", "EKS", "ECS"]
    },
    {
      category: "DevOps & CI/CD",
      items: ["Git", "GitHub", "GitHub Actions", "Jenkins", "Terraform", "Ansible", "ArgoCD"]
    },
    {
      category: "Containers & Orchestration",
      items: ["Docker", "Docker Compose", "Kubernetes"]
    }
  ],

  projects: [
    {
      name: "AWS ECS Deployment",
      description: "Deployed a containerized app using ECS + Fargate + ALB.",
      stack: ["AWS", "Docker", "ECS"],
      github: "#"
    },
    {
      name: "CI/CD Pipeline",
      description: "Automated build → test → deploy pipeline.",
      stack: ["GitHub Actions", "Docker"],
      github: "#"
    }
  ],

  contact: {
    email: "officialsanjaykumar101@gmail.com",
    github: "https://github.com/your-github",
    linkedin: "https://www.linkedin.com/in/sanjaykumar101/"
  }
};
