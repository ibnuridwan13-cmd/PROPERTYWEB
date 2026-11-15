#!/usr/bin/env python3
"""
Backend API Testing for 182 PROPERTY
Tests the lead capture, get leads, and promo APIs
"""

import requests
import json
import os
from datetime import datetime

# Get backend URL from frontend .env file
BACKEND_URL = "https://familyhomes-id.preview.emergentagent.com/api"

def test_lead_capture_api():
    """Test POST /api/leads - Lead Capture API"""
    print("\n=== Testing Lead Capture API (POST /api/leads) ===")
    
    # Test with valid data
    valid_lead_data = {
        "name": "Budi Santoso",
        "whatsapp": "081234567890",
        "category": "Renovasi Dapur"
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/leads", json=valid_lead_data, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            # Verify response contains all required fields
            required_fields = ['id', 'name', 'whatsapp', 'category', 'status', 'created_at']
            missing_fields = [field for field in required_fields if field not in data]
            
            if missing_fields:
                print(f"❌ FAIL: Missing fields in response: {missing_fields}")
                return False
            else:
                print(f"✅ SUCCESS: Lead created with ID: {data['id']}")
                print(f"   Name: {data['name']}")
                print(f"   WhatsApp: {data['whatsapp']}")
                print(f"   Category: {data['category']}")
                print(f"   Status: {data['status']}")
                print(f"   Created: {data['created_at']}")
                return True
        else:
            print(f"❌ FAIL: Expected 200, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ FAIL: Request failed - {e}")
        return False

def test_lead_validation():
    """Test POST /api/leads validation with missing fields"""
    print("\n=== Testing Lead Validation (Missing Fields) ===")
    
    # Test with missing name
    invalid_data = {
        "whatsapp": "081234567890",
        "category": "Renovasi Kamar"
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/leads", json=invalid_data, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:  # FastAPI validation error
            print("✅ SUCCESS: Validation working - missing fields rejected")
            return True
        else:
            print(f"❌ FAIL: Expected 422 validation error, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ FAIL: Request failed - {e}")
        return False

def test_get_leads_api():
    """Test GET /api/leads - Get All Leads API"""
    print("\n=== Testing Get Leads API (GET /api/leads) ===")
    
    try:
        response = requests.get(f"{BACKEND_URL}/leads", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list):
                print(f"✅ SUCCESS: Retrieved {len(data)} leads")
                if len(data) > 0:
                    # Check first lead structure
                    first_lead = data[0]
                    required_fields = ['id', 'name', 'whatsapp', 'category', 'status', 'created_at']
                    missing_fields = [field for field in required_fields if field not in first_lead]
                    
                    if missing_fields:
                        print(f"❌ FAIL: Lead objects missing fields: {missing_fields}")
                        return False
                    else:
                        print(f"   Sample lead: {first_lead['name']} - {first_lead['category']}")
                return True
            else:
                print(f"❌ FAIL: Expected array, got {type(data)}")
                return False
        else:
            print(f"❌ FAIL: Expected 200, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ FAIL: Request failed - {e}")
        return False

def test_promo_api():
    """Test GET /api/promo - Get Current Promo API"""
    print("\n=== Testing Promo API (GET /api/promo) ===")
    
    try:
        response = requests.get(f"{BACKEND_URL}/promo", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            # Check if it has promo structure
            required_fields = ['id', 'title', 'subtitle', 'description', 'valid_until', 'badge', 'is_active']
            missing_fields = [field for field in required_fields if field not in data]
            
            if missing_fields:
                print(f"❌ FAIL: Missing fields in promo response: {missing_fields}")
                return False
            else:
                print(f"✅ SUCCESS: Promo data retrieved")
                print(f"   Title: {data['title']}")
                print(f"   Subtitle: {data['subtitle']}")
                print(f"   Valid Until: {data['valid_until']}")
                print(f"   Badge: {data['badge']}")
                print(f"   Active: {data['is_active']}")
                return True
        else:
            print(f"❌ FAIL: Expected 200, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ FAIL: Request failed - {e}")
        return False

def main():
    """Run all backend API tests"""
    print("🚀 Starting 182 PROPERTY Backend API Tests")
    print(f"Backend URL: {BACKEND_URL}")
    print("=" * 60)
    
    results = []
    
    # Test Lead Capture API
    results.append(("Lead Capture API", test_lead_capture_api()))
    
    # Test Lead Validation
    results.append(("Lead Validation", test_lead_validation()))
    
    # Test Get Leads API
    results.append(("Get Leads API", test_get_leads_api()))
    
    # Test Promo API
    results.append(("Promo API", test_promo_api()))
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    
    passed = 0
    failed = 0
    
    for test_name, result in results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status} - {test_name}")
        if result:
            passed += 1
        else:
            failed += 1
    
    print(f"\nTotal: {len(results)} tests")
    print(f"Passed: {passed}")
    print(f"Failed: {failed}")
    
    if failed == 0:
        print("\n🎉 All tests passed!")
        return True
    else:
        print(f"\n⚠️  {failed} test(s) failed!")
        return False

if __name__ == "__main__":
    main()