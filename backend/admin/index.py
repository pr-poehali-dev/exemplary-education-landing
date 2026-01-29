import json
import os
import psycopg2
from psycopg2.extras import RealDictCursor

def handler(event: dict, context) -> dict:
    """API для админ-панели: получение заявок и управление контентом"""
    
    method = event.get('httpMethod', 'GET')
    path = event.get('queryStringParameters', {}).get('action', '')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }
    
    db_url = os.environ.get('DATABASE_URL')
    schema = os.environ.get('MAIN_DB_SCHEMA', 'public')
    
    try:
        conn = psycopg2.connect(db_url)
        cur = conn.cursor(cursor_factory=RealDictCursor)
        
        if method == 'GET' and path == 'registrations':
            cur.execute(
                f'SELECT id, name, email, age, tickets, created_at FROM {schema}.registrations ORDER BY created_at DESC'
            )
            registrations = cur.fetchall()
            
            result = []
            for reg in registrations:
                result.append({
                    'id': reg['id'],
                    'name': reg['name'],
                    'email': reg['email'],
                    'age': reg['age'],
                    'tickets': reg['tickets'],
                    'created_at': reg['created_at'].isoformat() if reg['created_at'] else None
                })
            
            cur.close()
            conn.close()
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'registrations': result})
            }
        
        elif method == 'GET' and path == 'content':
            section = event.get('queryStringParameters', {}).get('section', '')
            
            if section:
                cur.execute(
                    f"SELECT section, content FROM {schema}.site_content WHERE section = %s",
                    (section,)
                )
            else:
                cur.execute(
                    f'SELECT section, content FROM {schema}.site_content'
                )
            
            content_data = cur.fetchall()
            result = {}
            for item in content_data:
                result[item['section']] = item['content']
            
            cur.close()
            conn.close()
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'content': result})
            }
        
        elif method == 'PUT' and path == 'content':
            data = json.loads(event.get('body', '{}'))
            section = data.get('section')
            content = data.get('content')
            
            if not section or not content:
                return {
                    'statusCode': 400,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({'error': 'Укажите section и content'})
                }
            
            cur.execute(
                f"""
                INSERT INTO {schema}.site_content (section, content, updated_at) 
                VALUES (%s, %s, CURRENT_TIMESTAMP)
                ON CONFLICT (section) 
                DO UPDATE SET content = EXCLUDED.content, updated_at = CURRENT_TIMESTAMP
                """,
                (section, json.dumps(content))
            )
            conn.commit()
            cur.close()
            conn.close()
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'success': True, 'message': 'Контент обновлен'})
            }
        
        else:
            cur.close()
            conn.close()
            return {
                'statusCode': 404,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Не найдено'})
            }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': f'Ошибка: {str(e)}'})
        }
