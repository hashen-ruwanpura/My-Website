from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Email configuration
EMAIL_ADDRESS = os.getenv('EMAIL_ADDRESS')
EMAIL_PASSWORD = os.getenv('EMAIL_PASSWORD')

@app.route('/api/contact', methods=['POST'])
def contact():
    """Handle contact form submissions"""
    data = request.json
    
    # Validate request data
    if not all(key in data for key in ['name', 'email', 'subject', 'message']):
        return jsonify({"success": False, "message": "Missing required fields"}), 400
    
    try:
        # Create email message
        msg = MIMEMultipart()
        msg['From'] = EMAIL_ADDRESS
        msg['To'] = 'hashr.work@gmail.com'  # Your email address
        msg['Subject'] = f"Portfolio Contact: {data['subject']}"
        
        # Email body
        body = f"""
        You have received a new message from your portfolio website:
        
        Name: {data['name']}
        Email: {data['email']}
        Subject: {data['subject']}
        
        Message:
        {data['message']}
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Send email
        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()
            server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            server.send_message(msg)
        
        return jsonify({"success": True, "message": "Your message has been sent successfully!"})
    
    except Exception as e:
        print(f"Error sending email: {str(e)}")
        return jsonify({"success": False, "message": "An error occurred. Please try again later."}), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({"status": "healthy"})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8000))  # Changed from 5000 to 8000
    app.run(host='0.0.0.0', port=port, debug=True)
