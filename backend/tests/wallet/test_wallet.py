import pytest

from backend.wallet.wallet import Wallet

def test_verify_valid_signature():
    data = {'foo': 'test_data'}
    wallet = Wallet()
    signature = wallet.sign(data)

    assert Wallet.verify(wallet.public_key, data, signature)

def test_verify_invalid_signature_bad_public_key():
    data = {'foo': 'test_data'}
    wallet = Wallet()
    signature = wallet.sign(data)

    assert not Wallet.verify(Wallet().public_key, data, signature)

def test_verify_invalid_signature_bad_data():
    data = {'foo': 'test_data'}
    bad_data = {'foo': 'bad_data'}
    wallet = Wallet()
    signature = wallet.sign(data)

    assert not Wallet.verify(Wallet().public_key, bad_data, signature)

def test_verify_invalid_signature_bad_signature():
    data = {'foo': 'test_data'}
    bad_data = {'foo': 'bad_data'}
    wallet = Wallet()
    bad_signature = wallet.sign(bad_data)

    assert not Wallet.verify(Wallet().public_key, data, bad_signature)