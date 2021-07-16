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
````
export PEER=True && python3 -m backend.app
```

**Stuff I've learned**
Best practices in Object-oriented programming
Best practices in testing with pytest
The Pub/Sub pattern