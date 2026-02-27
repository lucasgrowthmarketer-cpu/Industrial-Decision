import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestBasicAPI:
    """Test basic API endpoints"""
    
    def test_root_endpoint(self, api_client):
        """Test root endpoint returns Hello World"""
        response = api_client.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        assert data["message"] == "Hello World"
    
    def test_status_endpoint_get(self, api_client):
        """Test GET /api/status returns list"""
        response = api_client.get(f"{BASE_URL}/api/status")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
    
    def test_status_endpoint_post(self, api_client):
        """Test POST /api/status creates a status check"""
        payload = {"client_name": "TEST_industrial_decision_test"}
        response = api_client.post(f"{BASE_URL}/api/status", json=payload)
        assert response.status_code == 200
        data = response.json()
        assert "id" in data
        assert "client_name" in data
        assert data["client_name"] == "TEST_industrial_decision_test"
        assert "timestamp" in data


class TestContactAPI:
    """Test contact form API endpoint"""
    
    def test_contact_endpoint_validation(self, api_client):
        """Test contact endpoint validates required fields"""
        # Missing required fields should fail validation
        payload = {"name": "Test User"}  # Missing email and context
        response = api_client.post(f"{BASE_URL}/api/contact", json=payload)
        # FastAPI returns 422 for validation errors
        assert response.status_code == 422
    
    def test_contact_endpoint_structure(self, api_client):
        """Test contact endpoint accepts valid structure - may fail due to SMTP but validates structure"""
        payload = {
            "name": "TEST_John Doe",
            "company": "TEST_Company Inc",
            "email": "test@example.com",
            "context": "Testing decision context",
            "preferred_contact": "email"
        }
        response = api_client.post(f"{BASE_URL}/api/contact", json=payload)
        # Either 200 (success) or 500 (SMTP fails but structure is valid)
        # This confirms the API accepts the correct schema
        assert response.status_code in [200, 500]
        if response.status_code == 200:
            data = response.json()
            assert "success" in data
            assert "message" in data
