from flask import Flask, render_template

app = Flask (__name__)

@app.route ('/')
def home ():
	return render_template("index.html")
	
@app.route("/projects")
def projects ():
	return render_template("project.html")

if __name__ == "__main__":
	app.run(debug=True)


# 	@app.route('/contact', methods=['POST'])
# def contact():

#     name = request.form['name']
#     email = request.form['email']
#     message = request.form['message']

#     # send email here

#     return redirect('/')