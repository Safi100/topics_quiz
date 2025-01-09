const questions = [
 {
        question: "How are electronic sensors used in digitizing the natural world?",
        options: [
            "They measure a physical event and translate it into electrical signals.",
            "They measure voltage as a function of time and output a graph.",
            "They convert digital events into analog representations.",
            "They measure electrical signals sent from a specific computer port.",
        ],
        answer: [0],
    },
    {
        question: "What functions do sensors perform in the digitized world?",
        options: [
            "Creating physical movement.",
            "Detecting events in the physical environment.",
            "Performing physical actions.",
            "Reducing current flow through a circuit.",
        ],
        answer: [1],
    },
    {
        question: "What is the purpose of a sequence diagram?",
        options: [
            "It represents the IP addressing scheme for devices within a network.",
            "A sequence diagram represents processes or workflows using different shapes, boxes, and connecting arrows.",
            "It is a graphical representation of an electronic circuit that represents electrical components and their connections through the use of standardized symbols.",
            "It represents the timeline and sequence of messages exchanged between devices needed to carry out the functionality of processes.",
            "It represents the portion of components as part of a whole.",
        ],
        answer: [3],
    },
    {
        question: "In Packet Tracer 7.x, the SBC is similar to an Arduino.",
        options: ["True", "False"],
        answer: [1], // False
    },
    {
        question: "What are two challenges that are associated with the rapid growth of IoT? (Choose two.)",
        options: [
            "Assure interoperability among different device vendors.",
            "Adding more switching ports for new things.",
            "Improving Internet connections for organizations.",
            "Securing new devices that require different levels of security.",
            "Developing new programming languages specifically for IoT.",
        ],
        answer: [0, 3],
    },
    {
        question: "What is a recommended security action to take when using off-the-shelf IoT devices?",
        options: [
            "Enable default user accounts.",
            "Disable UPnP.",
            "Enable Telnet.",
            "Disable software updates.",
        ],
        answer: [1],
    },
    {
        question: "What is Fog computing?",
        options: [
            "It is a type of computing where services are hosted where they are used, such as at the network edge or with end devices.",
            "It is a type of computing that sends controller data to a sensor.",
            "It is a type of computing that enhances P2P applications.",
            "It is a type of computing that disperses servers and services globally in distributed data centers.",
        ],
        answer: [0],
    },
    {
        question: "What is an example of cloud computing?",
        options: [
            "A continuous interaction between people, processes, data, and things.",
            "A service that offers on-demand access to shared resources.",
            "A network infrastructure that spans a large geographic area.",
            "An architectural style of the World Wide Web.",
        ],
        answer: [1],
    },
    {
        question: "Match the network component category with the description.",
        options: [
            "End devices → Source or destination of a message.",
            "Intermediate devices → Determine best path for packets.",
            "Media → Physical channel to carry messages.",
            "Services → Network applications.",
        ],
        answer: [0, 1, 2, 3],
        type: "match",
    },
    {
        question: "Match the functions with the IoT device.",
        options: [
            "Adds intelligence to things → Controller.",
            "Monitors physical properties of the environment → Sensor.",
            "Improves IoT network performance → None of these.",
            "Performs an action → Actuator.",
        ],
        answer: [0, 1, 3],
        type: "match",
    },
    {
        question: "Which term is used to describe the rate at which data is generated when referring to big data?",
        options: ["Velocity", "Volume", "Bandwidth", "Variety"],
        answer: [0],
    },
    {
        question: "Match the cloud computing term with the description.",
        options: [
            "Extracting data for analysis close to the source → Fog computing.",
            "On-demand access to a shared pool of configurable computing resources → Cloud computing.",
            "The process of extracting value from data while it is being generated → Data in motion.",
            "Distinguished by volume, velocity, and variety → Big data.",
        ],
        answer: [0, 1, 2, 3],
        type: "match",
    },
    {
        question: "Passive components rely on external power source to control current flow.",
        options: ["True", "False"],
        answer: [1], // False
    },
    {
        question: "What is used to uniquely identify devices connected to the Internet?",
        options: ["URL", "Port number", "IP address", "Device name", "Gateway address"],
        answer: [2],
    },
    {
        question: "Match the network type with its description.",
        options: [
            "PAN → Usually spans a few meters around an individual and is often used in IoT.",
            "LPWAN → Used in the IoT and do not need a lot of power.",
            "LAN → Spans a small geographical area and is used to connect end devices.",
            "WAN → Spans a wide geographical area and is used to connect LANs.",
        ],
        answer: [0, 1, 2, 3],
        type: "match",
    },
    {
        question: "What ensures that an IFTTT URI is only usable by the authorized device?",
        options: ["A public key", "A passphrase", "A secret key", "A challenge"],
        answer: [2],
    },
    {
        question: "Why is it common to connect an Arduino board with a single-board computer like the Raspberry Pi?",
        options: [
            "The Arduino is a full computer and the Raspberry Pi is not.",
            "The Raspberry Pi cannot process incoming digital signals.",
            "The Arduino has analog pins.",
            "The Raspberry Pi does not require software to interact with an Arduino.",
        ],
        answer: [2],
    },
    {
        question: "Which level of the Internet of Things reference model describes data storage?",
        options: [
            "Data abstraction.",
            "Edge computing.",
            "Data accumulation.",
            "Physical devices and controllers.",
        ],
        answer: [2],
    },
    {
        question: "Which action is the result of positive feedback?",
        options: [
            "An IoT device is connected to the cloud.",
            "A flashlight is used at night by a camper.",
            "A thermostat shuts down an air conditioning unit when the temperature reaches the set temperature.",
            "An unexpected chemical reaction in a chemical plant causes an explosion.",
        ],
        answer: [3],
    },
    {
        question: "Independent networks are easier to incorporate into the IoT than a converged network.",
        options: ["True", "False"],
        answer: [1], // False
    },
        {
        question: "LoRaWAN Data rates range from 0.3 Gbps to 50 Gbps.",
        options: ["True", "False"],
        answer: [1], // False
    },
    {
        question: "Security is built into the LoRaWAN standard, implemented in a multi-layer encryption scheme.",
        options: ["True", "False"],
        answer: [0], // True
    },
    {
        question: "What is the most common application of the Industrial Internet?",
        options: [
            "Data collection",
            "Healthcare device connectivity",
            "Predictive maintenance",
            "Smart grid",
        ],
        answer: [2], // Predictive maintenance
    },
    {
        question: "Match the description with the appropriate electronics term.",
        options: [
            "Solderless breadboard → Components are temporarily placed into holes arranged in rows and columns across this board.",
            "Printed circuit board → Capacitors, resistors, and active devices can be soldered on this board.",
            "None of these → A graphic shows an electrical circuit using component images.",
        ],
        answer: null, // Match question
    },
    {
        question: "Which cybersecurity solution would help with IoT physical security?",
        options: [
            "Firewall",
            "Secure switches and routers",
            "Video surveillance",
            "Data plane security",
        ],
        answer: [2], // Video surveillance
    },
    {
        question: "What is the key difference between an open-loop control system and a closed-loop control system?",
        options: [
            "A closed-loop system uses an IP-enabled controller whereas an open-loop system does not.",
            "A closed-loop system uses a negative feedback mechanism whereas an open-loop system uses a positive feedback system.",
            "A closed-loop system uses a feedback mechanism whereas an open-loop system does not.",
            "A closed-loop system uses a controller whereas an open-loop system does not.",
        ],
        answer: [2], // A closed-loop system uses a feedback mechanism whereas an open-loop system does not.
    },
    {
        question: "In an open loop, feedback is continuously being received by the controller from its sensors.",
        options: ["True", "False"],
        answer: [1], // False
    },
    {
        question: "What are two emerging data protocols used within IoT networks? (Choose two.)",
        options: ["CoAP", "VPN", "HTTP", "HTTPS", "MQTT"],
        answer: [0, 4], // CoAP and MQTT
    },
    {
        question: "Which type of information is conveyed in a sequence diagram?",
        options: [
            "Types of interactions between devices along a timeline",
            "Processes and workflows in a project",
            "Components in an electrical circuit",
            "Steps in an engineering design process",
        ],
        answer: [0], // Types of interactions between devices along a timeline
    },
    {
        question: "What are two recommended security actions to take when using off-the-shelf IoT devices? (Choose two.)",
        options: [
            "Ensure that all accounts are enabled.",
            "Enable remote management.",
            "Disable UPnP.",
            "Update software and patches.",
            "Use default user accounts and passwords.",
        ],
        answer: [2, 3], // Disable UPnP and Update software and patches
    },
    {
        question: "How do cloud services extend IoT functionality?",
        options: [
            "Reduce device network bandwidth requirements",
            "Provide increased security through obscurity",
            "Store data in an on-site server",
            "Move processing and storage functions off the IoT device",
        ],
        answer: [3], // Move processing and storage functions off the IoT device
    },
    {
        question: "What is used by a RESTful system to represent resources to external systems?",
        options: [
            "Domain names",
            "IP addresses",
            "Uniform Resource Identifiers",
            "Ethernet addresses",
        ],
        answer: [2], // Uniform Resource Identifiers
    },
    {
        question: "What trend is a major motivation for the development of Smart+Connected Cities systems?",
        options: [
            "Excess energy is wasted because of poor power distribution.",
            "More people are moving into cities.",
            "Healthcare costs continue to rise.",
            "Greenhouse gases are causing global warming.",
            "Cities need to connect with one another to share problems and solutions.",
        ],
        answer: [1], // More people are moving into cities
    },
    {
        question: "Al-Quds University plans to develop IoT solutions for both horizontal and vertical markets. What is the major difference in designing solutions for different industries?",
        options: [
            "Solutions for a horizontal market industry should be usable for a longer time, whereas solutions for a vertical industry would have a short limited time usage.",
            "Control software for a horizontal market industry should be coded with C, whereas control software for a vertical market industry should be coded with Python.",
            "Solutions for a horizontal market industry will deal with many general network devices, whereas solutions for a vertical market industry will deal with only specialized equipment.",
            "Solutions for a horizontal market industry should meet general needs across the industry, whereas solutions for a vertical market industry should meet specialized needs for the industry.",
        ],
        answer: [3], // Solutions for a horizontal market industry should meet general needs across the industry...
    },
    {
        question: "What uses a solenoid to actuate electric devices?",
        options: ["Passive circuit", "Linear circuit", "Relay", "Armature"],
        answer: [2], // Relay
    },
    {
        question: "Match the definitions with the appropriate steps of the design phase of a printed circuit board.",
        options: [
            "Finding possible vendors and material costs → Research",
            "The initial idea → Concept",
            "Symbolic representations of the circuit and components → Circuit design",
        ],
        answer: null, // Match question
    },
    {
        question: "Which type of media would use light to communicate between IoT devices?",
        options: ["Fiber", "UTP", "Copper", "Wireless"],
        answer: [0], // Fiber
    },
    {
        question: "Which action is the result of negative feedback?",
        options: [
            "A flashlight is used at night by a camper.",
            "A strong feedback noise is heard in an auditorium during a rehearsal.",
            "An unexpected chemical reaction in a chemical plant causes an explosion.",
            "A thermostat shuts down an air conditioning unit when the temperature reaches the set temperature.",
        ],
        answer: [3], // A thermostat shuts down an air conditioning unit...
    },
    {
        question: "Which statement describes Blockly?",
        options: [
            "It is a compiled language.",
            "It is a specific Linux distribution.",
            "It is graphic editing software for web design.",
            "It is a JavaScript-based library for implementing visual programming.",
        ],
        answer: [3], // It is a JavaScript-based library for implementing visual programming
    },
    {
        question: "Which language is an example of a compiled programming language?",
        options: ["Python", "PHP", "JavaScript", "C"],
        answer: [3], // C
    },
      {
        question: "Cisco Packet Tracer 7.x as a tool for modeling and prototyping IoT systems.",
        options: ["True", "False"],
        answer: [0], // True
    },
    {
        question: "What can be used to electrically open door latches, open or shut valves, move robotic limbs, and even actuate electric switch mechanisms?",
        options: ["Solenoids"],
        answer: [0], // Solenoids
    },
    {
        question: "What is represented by a diamond symbol in a flowchart?",
        options: [
            "A processing step",
            "A start or an end",
            "A decision",
            "An input or output",
        ],
        answer: [2], // A decision
    },
    {
        question: "Which type of payment model is typically used to purchase cloud services?",
        options: [
            "Calculation based on bandwidth",
            "Lump-sum payment in advance",
            "Annual subscription fee",
            "Pay-as-you-go system",
        ],
        answer: [3], // Pay-as-you-go system
    },
    {
        question: "What function is performed by an actuator?",
        options: [
            "Collecting data and then sending instructions for actions to be taken, or sending information for further analysis.",
            "Measuring a physical property by detecting information from the physical world.",
            "Receiving a signal from a device and performing a set action.",
            "Improving a physical environment by measuring changes.",
        ],
        answer: [2], // Receiving a signal from a device and performing a set action
    },
    {
        question: "What is a method to secure the control plane of an IoT device?",
        options: [
            "The encryption of user data",
            "Enforcement of authorized access to code",
            "Restricting access to servers",
            "Verification of data integrity",
        ],
        answer: [1], // Enforcement of authorized access to code
    },
    {
        question: "What type of device is able to create physical movement?",
        options: ["Resistor", "Actuator", "Sensor", "Diode"],
        answer: [1], // Actuator
    },
    {
        question: "Which two technologies are considered 4th generation cellular-based technologies that commonly require monthly payments to connect IoT devices? (Choose two.)",
        options: ["ZigBee", "Bluetooth", "Ethernet", "LTE", "LoRaWAN", "WiMAX"],
        answer: [3, 5], // LTE and WiMAX
    },
    {
        question: "Which HTTP method initiates a RESTful read action?",
        options: ["POST", "DELETE", "GET", "PUT"],
        answer: [2], // GET
    },
    {
        question: "Which action is the result of positive feedback?",
        options: [
            "A strong feedback noise is heard in an auditorium during a rehearsal.",
            "A flashlight is used at night by a camper.",
            "An IoT device is connected to the cloud.",
            "A thermostat shuts down an air conditioning unit when the temperature reaches the set temperature.",
        ],
        answer: [2], // An IoT device is connected to the cloud
    },
    {
        question: "What are three new challenges associated with the rapid growth of the IoT? (Choose three.)",
        options: [
            "Integrating many devices from different vendors with custom applications.",
            "Securing new devices with varying levels of security.",
            "integrating new things into existing networks.",
        ],
        answer: [0, 1, 2],
    },
    {
        question: "Which type of media would use electrical signals to communicate between IoT devices?",
        options: [
            "Single-mode fiber",
            "Wireless",
            "Copper",
            "Multimode fiber",
        ],
        answer: [2], // Copper
    },
    {
        question: "The Raspberry Pi is not a real-time SBC.",
        options: ["True", "False"],
        answer: [0], // True
    },
    {
        question: "What type of component has no effect on gain or control over voltage or current?",
        options: ["Active", "Linear", "Passive", "Nonlinear"],
        answer: [2], // Passive
    },
    {
        question: "Al-Quds University plans to add many more devices as part of an IoT solution. What is one of the main challenges Al-Quds University will face because of this rapid growth of digitization?",
        options: [
            "Providing power to the existing devices",
            "Integrating the new devices into the existing infrastructure",
            "Accessing data created by the existing devices",
            "Increasing the lengths currently defined in network wiring standards",
        ],
        answer: [1], // Integrating the new devices into the existing infrastructure
    },
    {
        question: "How are different programming structures represented in Blockly?",
        options: [
            "Programming code pieces",
            "Flowcharts",
            "Colored lines and symbols",
            "Colored blocks",
        ],
        answer: [3], // Colored blocks
    },
    {
        question: "What is the goal of fog computing?",
        options: [
            "To store all data on a single server for processing.",
            "To analyze data as close to the source as possible.",
            "To send data immediately to the cloud for secure storage.",
            "To permanently store data on the local device.",
        ],
        answer: [1], // To analyze data as close to the source as possible
    },
    {
        question: "Which of the following is an example of data in motion?",
        options: [
            "Medical information being transmitted from an ambulance to emergency department staff as a critically ill patient is being transported to the hospital.",
            "Collecting sales and transaction records in preparation for a monthly report from consultants as they travel to customers.",
            "Hourly weather information being recorded in preparation for the next day's weather forecast for a specific location.",
            "Recording road traffic volumes and patterns for future highway planning.",
        ],
        answer: [0], // Medical information being transmitted
    },
    {
        question: "Which wireless technology can be used to provide a metropolitan area with up to 100 Mbps of bandwidth?",
        options: ["5G", "ZigBee", "LoRaWAN", "Bluetooth"],
        answer: [0], // 5G
    },
    {
        question: "What measure should be taken to secure IoT devices?",
        options: [
            "Keep firmware updated.",
            "Disconnect from the Internet.",
            "Implement the security through obscurity model.",
            "Install self-encrypting hard drives.",
        ],
        answer: [0], // Keep firmware updated
    },
   {
    "question": "Which three blocks in the Business Model Canvas describe infrastructure management? (Choose three.)",
    "options": [
      "channels",
      "key activities",
      "cost structure",
      "key resources",
      "revenue stream",
      "key partnerships"
    ],
    "answer": [1, 3, 5]
  },
  {
    "question": "Which building block of the Business Model Canvas identifies how value will be delivered to customer segments?",
    "options": [
      "customer relationships",
      "customer segments",
      "cost structure",
      "channels"
    ],
    "answer": [3]
  },
  {
    "question": "Which aspect of the Business Model Canvas is covered by four blocks?",
    "options": [
	"value proposition",
	"customer segment",
	"channels",
	"customer relationships"
    ],
    "answer": [2]
  },
  {
    "question": "What is documented through the use of a flowchart?",
    "options": [
      "the best paths through a network",
      "the interactions between entities along a timeline",
      "the solution flow to a given problem",
      "the components and connections of electric circuits"
    ],
    "answer": [2]
  },
  {
    "question": "What is an example of a company or entrepreneur using the Business Model Canvas?",
    "options": [
      "using a network simulation tool such as Packet Tracer",
      "using network documentation software such as Microsoft Visio",
      "using network inspection software such as WireShark",
      "using sticky notes on a large surface"
    ],
    "answer": [3]
  },
  {
    "question": "What are the first two steps in the engineering design process? (Choose two.)",
    "options": [
      "document",
      "inspire",
      "define",
      "construct",
      "analyze"
    ],
    "answer": [0, 1]
  },
  {
    "question": "What are the five steps in the engineering design process by order?",
    "options": [],
    "answer": ["inspire", "define", "prototype", "test", "present"]
  },
  {
    "question": "Which function is associated with the marketing and sales activity of a product or service in the Business Model Canvas?",
    "options": [
      "facilitating an exchange of value for offerings",
      "receiving inputs for offerings",
      "transforming inputs into offerings",
      "distributing offerings to customers"
    ],
    "answer": [0]
  },
  {
    "question": "Fill in the blank.\nRent is an example of a ___ cost because it does not change based on the amount of product produced.",
    "options": [],
    "answer": ["fixed"]
  },
  {
    "question": "Which web architecture uses hyperlink references that point to images, audio, or video?​",
    "options": [
      "hypermedia",
      "hyperlink",
      "URIs",
      "URLs"
    ],
    "answer": [0]
  },
  {
    "question": "What are three of the eight Millennium Development Goals? (Choose three.)",
    "options": [
      "eradicate extreme hunger",
      "stop nuclear weapon development",
      "ensure environmental sustainability",
      "realize IoT solutions for car manufacturers",
      "promote gender equality and empower women",
      "provide high speed Internet access to every home"
    ],
    "answer": [0, 2, 4]
  },
  {
    "question": "Which area of activity in the Business Model Canvas is associated with transforming inputs into offerings?",
    "options": [
      "sales",
      "marketing",
      "service",
      "operations"
    ],
    "answer": [3]
  },
  {
    "question": "What are two precautions that can be taken to prevent radio interference from unconnected analog pins on a circuit board? (Choose two.)",
    "options": [
      "Connect them to ground.",
      "Connect them to the battery.",
      "Connect them to a resistor.",
      "Cover them with electrical tape.",
      "Connect them to each other."
    ],
    "answer": [0, 1]
  },
  {
    "question": "What are two characteristics of the Cisco Connected Factory Solution? (Choose two.)",
    "options": [
      "secure manufacturing standards",
      "network security",
      "operational efficiency and productivity",
      "low power requirements",
      "complex management tools",
      "intelligent grid routers"
    ],
    "answer": [1, 2]
  },
  {
    "question": "What are three of the six core components in the Cisco IoT system? (Choose three.)",
    "options": [
      "fog computing",
      "wearable technologies",
      "data analytics",
      "robot guides",
      "cyber and physical security",
      "smart bandages"
    ],
    "answer": [0, 2, 4]
  },
  {
    "question": "Match the Cisco care-at-a-distance solution components with the functions.",
    "options": [
      "Cisco Extended Care –> facilitates remote patient engagement and care team interactions",
      "Cisco WebEx for Healthcare –> facilitates remote collaboration, training, and patient education",
      "Cisco TelePresence for Healthcare –> links people globally for training, consultation, and specialized collaboration"
    ],
    "answer": []
  },
  {
    "question": "Which Cisco IoT manufacturing solution addresses protection against risks, improves efficiency, and reduces factory site downtime?",
    "options": [
      "Cisco Secure Ops",
      "Cisco Connected Factory",
      "Cisco Connected Machines",
      "Cisco Connected Supply Chain"
    ],
    "answer": [0]
  },
  {
    "question": "What is an example of M2M communication in a home with the IoT connection?",
    "options": [
      "A home owner views the home monitoring system while traveling out of town.",
      "A smart refrigerator sends a message to a grocery store for the delivery of milk.",
      "A customer receives a message from an online store that the product ordered is shipped.",
      "A webcam detects movement and notifies a home owner that someone has entered the home."
    ],
    "answer": [1]
  },
  {
    "question": "Which Cisco IoT pillar would include industrial routers, industrial switches, industrial wireless devices, and embedded networks?",
    "options": [
      "fog computing",
      "network connectivity",
      "cyber and physical security",
      "management and automation"
    ],
    "answer": [1]
  },
  {
    "question": "Which group of organizations is an example of vertical industries suitable for a common technology solution?",
    "options": [
      "restaurants, car dealers, power plants",
      "pharmaceutical companies, hospitals, lab facilities",
      "car manufacturers, universities, insurance companies",
      "tool manufacturers, food process plants, book publishers"
    ],
    "answer": [1]
  },
  {
    "question": "Which statement describes the term Industrial Internet?",
    "options": [
      "the platform that allows cloud-based application development",
      "Internet infrastructure components",
      "software and hardware that extends IoT applications to the network edge",
      "the integration of complex physical machinery with networked sensors and software"
    ],
    "answer": [3]
  },
  {
    "question": "Which Cisco smart grid solution works with utilities to plan and design reliable and highly secure network architectures?",
    "options": [
      "Grid Operations",
      "Field Area Network",
      "GridBlocks Architecture",
      "Connected Grid Services",
      "Transmission and Substation"
    ],
    "answer": [2]
  },
  {
    "question": "Which solution of Cisco Smart+Connected Communities provides a standards-based system to help reduce city energy consumption and improve citizen vehicle compliance?",
    "options": [
      "Smart+Connected Wi-Fi",
      "Smart+Connected Lighting",
      "Smart+Connected Operations Center",
      "Smart+Connected Parking and Traffic"
    ],
    "answer": [1]
  },
  {
    "question": "How does the Smart Grid system benefit the environment?",
    "options": [
      "It decreases traffic in cities and helps eliminate air pollution from cars.",
      "It enables the more efficient use of home energy resources by enabling homeowners to control the consumption of energy by heating and cooling systems, lighting, and appliances.",
      "It enables excess energy that is generated at homes and other sources to be distributed along with the power generated by utility companies.",
      "It limits the amount of power that is available to consumers through enhanced monitoring and control by utility companies."
    ],
    "answer": [2]
  },
  {
    "question": "Which Cisco healthcare provider management solution enables experts to plan, build, and manage a network that meets clinical, business, and compliance needs?",
    "options": [
      "Cisco Medical-Grade Network",
      "Digital Media Suite for healthcare",
      "Cisco Services for Connected Health",
      "Cisco Healthcare Intelligent Contact Center"
    ],
    "answer": [2]
  },
  {
    "question": "Match the wireless technology with the description.",
    "options": [
      "ZigBee –> popular in IoT applications such as home automation",
      "4G/5G –> cellular-based technology for transferring data over large geographic areas",
      "LoRaWAN –> uses a gateway to relay messages between end-devices and a central network server"
    ],
    "answer": []
  },
  {
    "question": "What are three characteristics that distinguish big data from data? (Choose three.)",
    "options": [
      "amount of data being transported and stored",
      "rate at which data is generated",
      "type of data that is generated",
      "where the data is stored",
      "how the data is collected",
      "who is authorized to access the data"
    ],
    "answer": [0, 1, 2]
  }
];
  
  const quizContainer = document.getElementById("quiz-container");

// Load sounds
const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");

questions.forEach((q, index) => {
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");

  const questionText = document.createElement("h3");
  questionText.textContent = `${index + 1}. ${q.question}`;
  questionDiv.appendChild(questionText);

  const optionsDiv = document.createElement("div");
  optionsDiv.classList.add("options");

  if (q.type === "match") {
    // If it's a matching question
    const matchingContainer = document.createElement("div");
    matchingContainer.classList.add("matching-container");

    q.options.forEach((option, i) => {
      const optionDiv = document.createElement("div");
      optionDiv.classList.add("matching-option");
      optionDiv.textContent = option;
      matchingContainer.appendChild(optionDiv);
    });

    optionsDiv.appendChild(matchingContainer);
  } else {
    q.options.forEach((option, i) => {
      const button = document.createElement("button");
      button.textContent = option;

      button.addEventListener("click", () => {
        if (q.answer.includes(i)) {
          button.classList.add("correct");
          correctSound.play();
        } else {
          button.classList.add("wrong");
          wrongSound.play();
        }

        button.disabled = true; // Disable the button after clicking

        // Check if all correct answers are selected
        const selectedCorrect = Array.from(optionsDiv.children).filter(
          (btn) => btn.classList.contains("correct")
        ).length;

        if (selectedCorrect === q.answer.length) {
          // Disable all buttons when all correct answers are selected
          Array.from(optionsDiv.children).forEach((btn) => {
            btn.disabled = true;
          });
        }
      });

      optionsDiv.appendChild(button);
    });
  }

  questionDiv.appendChild(optionsDiv);
  quizContainer.appendChild(questionDiv);
});
