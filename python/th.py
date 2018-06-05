import Main as m
import cv2
import time
import urllib.request as request

#Program Starts here
l = cv2.VideoCapture(0) #Open camera number 0
a = 0
savedplate = ""
while True: #Take frame by frame
    cap , frame = l.read() #read the frame from camera
    mx = m.main(frame , a)
    
    a += 1
   
    #send image on plate recognition program
    print(mx)           #print message
    #cv2.imshow("frame" , frame)
    if mx[0] != "!" and len(mx) == 7:
        if( mx != savedplate):
            mex = "http://127.0.0.1:8080/tutto/tesina/api/targa.php?m=" + mx
            response = request.urlopen(mex).read()
    savedplate = mx
    time.sleep(1)       #1 second sleep
l.release()         #close camera , will never work
