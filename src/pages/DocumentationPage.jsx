import { Link } from "react-router-dom"
import { ArrowRight, Brain, Cpu, Zap, Github } from "lucide-react"
import { Button } from "../components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

export default function DocumentationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
              VS
            </div>
            <Link to="/" className="text-xl font-bold text-blue-600">
              Vaani Sahayak
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link to="#" className="text-sm font-medium transition-colors hover:text-blue-600">
                Home
              </Link>
              <Link to="#" className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700">
                Documentation
              </Link>
              <Link to="#" className="text-sm font-medium transition-colors hover:text-blue-600">
                About
              </Link>
              <Link to="#" className="text-sm font-medium transition-colors hover:text-blue-600">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 text-sm text-white">Documentation</div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Vaani Sahayak Indian Sign Language Detection
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    An AI-driven translator designed to overcome communication barriers between hearing-impaired and
                    mainstream communities through advanced sign language recognition.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="mr-2">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                  <Button variant="outline">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.9997 1.89453C6.41891 1.89453 1.89453 6.41891 1.89453 11.9997C1.89453 17.5805 6.41891 22.1049 11.9997 22.1049C17.5805 22.1049 22.1049 17.5805 22.1049 11.9997C22.1049 6.41891 17.5805 1.89453 11.9997 1.89453ZM7.78784 17.3401C7.56691 17.2035 7.36438 17.0255 7.19207 16.8143C7.01976 16.6031 6.88077 16.3624 6.78172 16.1033C6.68267 15.8441 6.62517 15.5704 6.61188 15.2925C6.59858 15.0146 6.62973 14.7361 6.70391 14.4685C6.77809 14.2009 6.89407 13.9481 7.04677 13.7216C7.19947 13.4951 7.38655 13.2983 7.60003 13.1402C7.81351 12.9822 8.05025 12.8654 8.30069 12.7951C8.55113 12.7247 8.81124 12.7019 9.06891 12.7278C9.32658 12.7537 9.57857 12.8279 9.81297 12.9469C10.0474 13.0659 10.2608 13.2278 10.4436 13.4252C10.6264 13.6226 10.7758 13.8526 10.8851 14.1045C10.9944 14.3564 11.0619 14.6264 11.0849 14.9021C11.1079 15.1778 11.0861 15.4554 11.0204 15.7235C10.9547 15.9916 10.8461 16.2461 10.6992 16.4764C10.5523 16.7067 10.3695 16.9093 10.1592 17.0747C9.94887 17.24 9.71456 17.3655 9.46538 17.4453C9.2162 17.5251 8.95621 17.5579 8.69753 17.5422C8.43885 17.5265 8.18477 17.4625 7.94784 17.3531L7.78784 17.3401ZM17.3401 11.9997C17.3401 12.5301 17.2336 13.0549 17.0266 13.5422C16.8196 14.0295 16.5163 14.4695 16.1348 14.8348C15.7533 15.2 15.3013 15.4834 14.8066 15.6677C14.3118 15.8519 13.7842 15.9332 13.2553 15.9068C12.7264 15.8804 12.2088 15.7468 11.7329 15.5141C11.257 15.2814 10.8333 14.9545 10.4879 14.5533C10.1425 14.1522 9.88374 13.6855 9.72909 13.1812C9.57444 12.6769 9.52731 12.1458 9.59053 11.6221C9.65375 11.0984 9.82591 10.5931 10.0961 10.1359C10.3663 9.67866 10.7289 9.27948 11.1625 8.96419C11.5961 8.6489 12.0909 8.42493 12.6166 8.30621C13.1423 8.18749 13.6873 8.17671 14.2171 8.27458C14.7469 8.37245 15.2504 8.57673 15.6972 8.87518C16.144 9.17363 16.5246 9.56 16.8158 10.0097C17.107 10.4594 17.3026 10.9631 17.3901 11.4897L17.3401 11.9997Z"
                        fill="currentColor"
                      />
                    </svg>
                    View on Huggingface
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="group w-[600px] h-[400px] perspective-[1000px] relative">
                  <div className="w-full h-full transition-transform duration-700 transform-style-preserve-3d relative group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute w-full h-full backface-hidden">
                      <img
                        src="/images/vaani-sahayak-front.jpg"
                        alt="Vaani Sahayak Demo Front"
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                    <div className="absolute w-full h-full backface-hidden [transform:rotateY(180deg)]">
                      <img
                        src="/images/vaani-sahayak-back.jpg"
                        alt="Vaani Sahayak Demo Back"
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="overview" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-3xl grid-cols-5">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="methodology">Methodology</TabsTrigger>
                  <TabsTrigger value="architecture">Architecture</TabsTrigger>
                  <TabsTrigger value="implementation">Implementation</TabsTrigger>
                  <TabsTrigger value="future">Future Work</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="overview" className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Project Overview</h2>
                  <p className="text-gray-500 md:text-lg">
                    Vaani Sahayak is an AI-driven translator designed to overcome the communication barriers between
                    hearing-impaired and mainstream communities. It interprets Hindi letters (अ to ज्ञ) through HISL, a
                    sign language, by recognizing gestures of real-time hand movements via a mix of computer vision,
                    deep learning, and machine learning.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Version 1.0</CardTitle>
                      <Brain className="h-4 w-4 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">CNN Model</div>
                      <p className="text-xs text-gray-500">
                        Uses Convolutional Neural Networks for gesture recognition
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Version 2.0</CardTitle>
                      <Zap className="h-4 w-4 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">YOLOv11</div>
                      <p className="text-xs text-gray-500">
                        Enhanced with real-time object detection for faster recognition
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Accuracy</CardTitle>
                      <Cpu className="h-4 w-4 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">85-90%</div>
                      <p className="text-xs text-gray-500">Recognition accuracy for Hindi sign language gestures</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold tracking-tight">Abstract</h3>
                  <p className="text-gray-500">
                    Vaani Sahayak is an AI-driven translator designed to overcome the communication barriers between
                    hearing-impaired and mainstream communities. It interprets Hindi letters (अ to ज्ञ) through HISL, a
                    sign language, by recognizing gestures of real-time hand movements via a mix of computer vision,
                    deep learning, and machine learning. Gesture detection and recognition are greatly boosted by CNNs,
                    which helps to bring about better predictions of a Hindi letter. NLP is integrated to suggest words
                    that could actually be completed so as to ensure a smoother and more meaningful interaction between
                    the parties engaged in a conversation.
                  </p>
                  <p className="text-gray-500">
                    As an assistive device based on deep learning techniques, Vaani Sahayak will contribute to enhancing
                    accessibility for deaf and mute community Hindi speakers. By utilizing novel AI fields like CNNs,
                    NLP, and computer vision to provide real-time communication support, Vaani Sahayak makes
                    interactions less disjointed and thereby, more inclusive.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="methodology" className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Methodology</h2>
                  <p className="text-gray-500 md:text-lg">
                    The development of Vaani Sahayak follows a systematic approach to ensure effective and accurate
                    translation of sign language gestures into text.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Dataset</CardTitle>
                      <CardDescription>Training data for the recognition model</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p>
                        The dataset employs images of Indian Sign Language, presented in the form of hand gestures of
                        Hindi characters from अ to ज्ञ, 48 by 48 pixels. It consists of 1200 images for each class,
                        totaling 57,600 images.
                      </p>
                      <p>
                        The dataset was created with OpenCV to capture hand gestures and store them in appropriate
                        directories. It provides different people performing similar gestures under varying conditions,
                        allowing the model to learn variability in terms of shapes, hand orientation, and movement.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Preprocessing</CardTitle>
                      <CardDescription>Image preparation techniques</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p>
                        Several preprocessing operations are performed on the images to improve recognition accuracy:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Resizing to 48x48 pixels to standardize input</li>
                        <li>HSV-based skin masking to separate background from hand regions</li>
                        <li>Grayscale conversion for feature extraction</li>
                        <li>ORB feature extraction based on Oriented FAST and Rotated BRIEF technique</li>
                      </ul>
                      <p>
                        These steps together allow the model to recognize complex movements and increase overall
                        accuracy.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Model Architecture</CardTitle>
                    <CardDescription>Deep learning approach for gesture recognition</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Version 1.0: CNN Model</h4>
                      <p>
                        The heart of Vaani Sahayak functionality lies in its model architecture, which involves a CNN
                        followed by a transformer to generate text predictions. The CNN includes several layers of
                        convolution and pooling that capture spatial hierarchies in the input images and can thus
                        identify hand shapes and movements.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold">Version 2.0: YOLOv11</h4>
                      <p>
                        Vaani Sahayak 2.0 incorporates YOLOv11, a recent and state-of-the-art object detection model, to
                        quickly identify and recognize hand signs mapping Hindi (अ-ज्ञ) and English (A-Z) alphabets.
                        Contrary to earlier versions based on CNN-based classification, YOLOv11 achieves quicker
                        inference, improved accuracy, and improved generalization over varied backgrounds and lighting.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold">Word Prediction</h4>
                      <p>
                        The features obtained are passed to a transformer model that learns to apply attention
                        mechanisms in ascertaining the context and interrelations between the predicted Hindi
                        characters. This combination ensures real-time gesture recognition along with word prediction,
                        enhancing the user experience.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="architecture" className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">System Architecture</h2>
                  <p className="text-gray-500 md:text-lg">
                    Vaani Sahayak follows a modular architecture with several components working together to provide
                    seamless sign language recognition and translation.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Backend Development</CardTitle>
                      <CardDescription>Server-side processing and API</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p>
                        The backend of Vaani Sahayak is developed in FastAPI, which brings in fast performance to
                        interact with the real-time API. This framework supports asynchronous processing that can
                        quickly take care of multiple requests at a time.
                      </p>
                      <p>Key API endpoints include:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          <code>/predict</code> - Predicts Hindi letters from input frames
                        </li>
                        <li>
                          <code>/sentence</code> - Updates the sentence constructed so far
                        </li>
                        <li>
                          <code>/suggest_word</code> - Provides word suggestions using transformer model
                        </li>
                      </ul>
                      <p>
                        Pre-trained models are loaded at startup into memory to ensure fast inferences, significantly
                        enhancing the user experience.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Web Interface</CardTitle>
                      <CardDescription>Frontend user experience</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p>
                        The web interface is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It
                        allows users to:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Capture hand gestures through a webcam</li>
                        <li>Indicate interest regions for gesture detection</li>
                        <li>View predicted Hindi characters and formed sentences</li>
                        <li>See suggestions for possible next words</li>
                      </ul>
                      <p>
                        The interface integrates front-end and back-end technologies to make communication accessible
                        for the deaf community.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>System Flow</CardTitle>
                    <CardDescription>End-to-end process of sign language recognition</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>
                          <span className="font-medium">Capture:</span> User performs a sign gesture in front of the
                          camera
                        </li>
                        <li>
                          <span className="font-medium">Detection:</span> YOLOv11 model detects the sign and classifies
                          it
                        </li>
                        <li>
                          <span className="font-medium">Processing:</span> Backend API processes the detected sign and
                          converts it to text
                        </li>
                        <li>
                          <span className="font-medium">Prediction:</span> Word prediction is triggered using NLP
                          (Transformers/BERT)
                        </li>
                        <li>
                          <span className="font-medium">Display:</span> Processed text and suggestions are shown on the
                          frontend UI
                        </li>
                        <li>
                          <span className="font-medium">Confirmation:</span> User confirms or modifies the text
                        </li>
                        <li>
                          <span className="font-medium">Storage:</span> Interaction is stored in the database for future
                          reference
                        </li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="implementation" className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Implementation Details</h2>
                  <p className="text-gray-500 md:text-lg">
                    Technical implementation of the Vaani Sahayak system, including languages, frameworks, and code
                    samples.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Technologies Used</CardTitle>
                      <CardDescription>Languages and frameworks</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold">Languages</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Python - AI models, backend processing, data management</li>
                            <li>JavaScript (React.js, Next.js) - Frontend development</li>
                            <li>HTML & CSS - Web interface structure and styling</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold">Frameworks & Libraries</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>TensorFlow & PyTorch - Deep learning environments</li>
                            <li>FastAPI - High-performance API backend</li>
                            <li>OpenCV - Computer vision and image processing</li>
                            <li>React.js - Interactive UI development</li>
                            <li>MongoDB - Database for storing interactions</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold">Development Tools</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Google Colab - Model training with GPU/TPU acceleration</li>
                            <li>Roboflow - Dataset annotation and preprocessing</li>
                            <li>PyCharm - Backend development</li>
                            <li>VS Code - Frontend development</li>
                            <li>Figma - UI/UX design</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>System Modules</CardTitle>
                      <CardDescription>Key components of the application</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold">Gesture Recognition Module</h4>
                          <p className="text-sm">
                            Utilizes YOLOv11 for real-time sign detection, trained using Roboflow dataset annotation.
                            Extracts hand gesture features and translates them into text.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold">Text Processing & Sentence Formation</h4>
                          <p className="text-sm">
                            Processes identified gestures to anticipate words/sentences. Applies transformers-based NLP
                            for next-word predictions. Scaffolds past gestures to construct complete sentences.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold">API & Backend Module</h4>
                          <p className="text-sm">
                            Developed using FastAPI for efficient communication. Manages model predictions, text
                            processing, and database storage. Supports real-time performance with optimized API
                            responses.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold">Frontend UI Module</h4>
                          <p className="text-sm">
                            Developed using React.js & Next.js for a seamless user experience. Offers a user-friendly
                            interface for live gesture translation.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Backend Code Sample</CardTitle>
                    <CardDescription>FastAPI implementation for sign detection</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm">
                      {`from fastapi import FastAPI, File, UploadFile
from fastapi.responses import StreamingResponse, JSONResponse
import cv2
import numpy as np
import torch
from ultralytics import YOLO
import io

app = FastAPI()

# Load the YOLO model
model = YOLO("best-4.pt")

@app.post("/upload_frame/")
async def upload_frame(file: UploadFile = File(...)):
   # Read and decode image
   contents = await file.read()
   nparr = np.frombuffer(contents, np.uint8)
   frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

   # Perform YOLO detection
   results = model(frame)

   detected_classes = []  # Store detected class names

   # Draw bounding boxes and labels
   for result in results:
       for box in result.boxes:
           x1, y1, x2, y2 = map(int, box.xyxy[0])
           class_id = int(box.cls[0])
           label = model.names[class_id]
           conf = box.conf[0].item()

           detected_classes.append(label)  # Append class name to the list

           # Calculate center of bounding box
           center_x = (x1 + x2) // 2
           center_y = (y1 + y2) // 2

           # Draw bounding box
           cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 2)

           # Draw label at the center of the bounding box
           text = f'{label} {conf:.2f}'
           text_size = cv2.getTextSize(text, cv2.FONT_HERSHEY_SIMPLEX, 0.5, 2)[0]
           text_x = center_x - text_size[0] // 2
           text_y = center_y + text_size[1] // 2

           # Draw text background
           cv2.rectangle(frame, (text_x - 2, text_y - text_size[1] - 2),
                         (text_x + text_size[0] + 2, text_y + 2), (0, 255, 0), -1)

           # Draw text
           cv2.putText(frame, text, (text_x, text_y), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 0), 2)

   # Encode frame as JPEG
   _, encoded_image = cv2.imencode(".jpg", frame)

   return JSONResponse(content={"detected_classes": detected_classes, "image": encoded_image.tobytes().hex()})

@app.get("/")
def root():
   return {"message": "Vaani sahayak YOLOv11 API on Hugging Face is Running!"}`}
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="future" className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Future Work & Limitations</h2>
                  <p className="text-gray-500 md:text-lg">
                    Current limitations of the system and planned enhancements for future versions.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Current Limitations</CardTitle>
                      <CardDescription>Areas for improvement</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                          <p>
                            <span className="font-medium">Lighting and Background Sensitivity:</span> The accuracy is
                            influenced by lighting conditions and complex backgrounds.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                          <p>
                            <span className="font-medium">Occlusion Handling:</span> Difficulty with occluded hands or
                            two-handed gestures.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                          <p>
                            <span className="font-medium">Dataset Diversity:</span> Limited regional sign variation and
                            personalized signs.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                          <p>
                            <span className="font-medium">Real-Time Processing:</span> Delays in real-time execution on
                            low-end devices.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                          <p>
                            <span className="font-medium">Speech Integration:</span> Lack of immediate speech synthesis
                            component.
                          </p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Future Enhancements</CardTitle>
                      <CardDescription>Planned improvements</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                          <p>
                            <span className="font-medium">Transformer-Based Vision Models:</span> Using Vision
                            Transformers (ViTs) for enhanced recognition accuracy.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                          <p>
                            <span className="font-medium">Multi-Camera and Depth Perception:</span> Using depth sensors
                            to improve 3D gesture recognition.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                          <p>
                            <span className="font-medium">On-Device Processing:</span> Mobile-optimized version with
                            TensorFlow Lite or ONNX.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                          <p>
                            <span className="font-medium">Cloud-Based API:</span> Hosting a cloud-based sign recognition
                            API for easier integration.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                          <p>
                            <span className="font-medium">Personalized Learning:</span> System adaptation to individual
                            signing habits.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                          <p>
                            <span className="font-medium">Speech Output:</span> Natural voice synthesis using WaveNet or
                            similar models.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                          <p>
                            <span className="font-medium">Gesture-Based AI Assistants:</span> Integration with virtual
                            assistants for enhanced accessibility.
                          </p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Conclusion</CardTitle>
                    <CardDescription>Impact and significance of the project</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Vaani Sahayak effectively improves Indian Sign Language (ISL) recognition with advanced deep
                      learning models. Through the use of real-time object detection, NLP word prediction, and a
                      user-friendly UI, the system closes the gap between the hearing-impaired population and society at
                      large.
                    </p>
                    <p>
                      The project shows considerable enhancements in recognition rates and processing speeds over
                      previous approaches. Custom datasets for Hindi alphabets have sharpened the model's recognition of
                      hand movements to ensure low misclassification rates and high efficiency under real-world
                      conditions.
                    </p>
                    <p>
                      As a technological steer into accessibility, Vaani Sahayak is a very important tool in breaking
                      language barriers and promoting equal opportunities in communication through the means of Hindi
                      Indian Sign Language.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2024 Vaani Sahayak. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="#" className="text-sm font-medium underline underline-offset-4">
              Terms of Service
            </Link>
            <Link to="#" className="text-sm font-medium underline underline-offset-4">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
