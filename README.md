ouroboros is a blockchain written in Python

**Activate the virtual environment**

```
source blockchain-env/Scripts/activate
```

**Install all packages**
```
pip install -r requirements.txt
```

**Run the tests**

Make sure to activate the virtual environment.

```
python3 -m pytest backend/tests
```

**Run the application and API**

Make sure to activate the virtual environment.

```
python3 -m backend.app
```

**Run a peer instance**
Make sure to activate the virtual environment.
```
export PEER=True && python3 -m backend.app
```

**Seed the backend with data**
Make sure to activate the virtual environment.
```
export SEED_DATA=True && python -m backend.app
```

**Run the frontend**
In the frontend directory:
```
npm run start
```

**Stuff I've learned**
Best practices in Object-oriented programming
Best practices in testing with pytest
Writing automatic test scripts
The Pub/Sub pattern