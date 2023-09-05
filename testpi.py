import socket

def is_mongodb_available(host, port):
    try:
        # Create a socket to the MongoDB server
        sock = socket.create_connection((host, port), timeout=5)
        sock.close()
        return True
    except (socket.timeout, ConnectionRefusedError):
        return False

# Replace these with your MongoDB server's host and port
mongodb_host = 'shipmentDeliveryMongodb'
mongodb_port = 27017

if is_mongodb_available(mongodb_host, mongodb_port):
    print("MongoDB server is available.")
else:
    print("MongoDB server is not available.")