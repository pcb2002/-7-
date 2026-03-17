(팀원 소개 이미지)-> 각자 작성하시면 최종으로 만들기

프로젝트 구조
```
sparta-git-cowork/
├── index.html          # 팀원 목록 페이지
├── members/           # 팀원 정보 JSON 파일 디렉토리
│   ├── members.json   # 팀원 목록 파일
│   ├── member1.json  # 템플릿 1 (프론트엔드 개발자)
│   ├── member2.json  # 템플릿 2 (백엔드 개발자)
│   ├── member3.json  # 템플릿 3 (UI/UX 디자이너)
│   ├── member4.json  # 템플릿 4 (풀스택 개발자)
│   ├── member5.json  # 템플릿 5 (데이터 분석가)
│   └── example.json   # 예시 팀원 정보
└── image/             # 이미지 파일 디렉토리
```

커밋 메시지 구조
```
type : subject

body 

footer
```

type rule
```
Type      설명	참고사항
Feat      기능 추가	기능 당 최초 한 번만 사용
Build     라이브러리 세팅/업데이트	라이브러리 설치 최초 한 번만 사용
Update    라이브러리 버전 업데이트/커스텀	 
Config	  Config 파일 설정	 
Remove	  파일 삭제	 
Fix	      기능 에러 수정	 
HotFix	  치명적인 버그 수정	main 브랜치에 바로 반영
Style     UI 관련 CSS 수정	 
Chore     단순 코드 수정	주석, 줄 바꿈, 임포트문, 세미콜론 등등..
Revise    기능 추가나 덧붙임을 위한 수정	 
Typo      오타 수정	 
Modify    기능 변경 있는 코드 개선/변경	 
Refactor  기능 변경 없는 코드 개선	 
Asset     이미지, 폰트	리소스 파일
Docs      문서 작성	 
```
subject rule
- 제목은 최대 50글자 넘지 않는다.
- 마침표 및 특수기호를 사용하지 않는다.
- 영어로 작성 시 첫 글자는 대문자로 작성한다.
- 명령문을 사용한다.
- 간결하고 요점적으로 서술한다.

body rule
- 한 줄당 72자 내로 작성한다.
- 상세하게 작성한다.
- 어떻게 보다는 무엇을, 왜 변경했는지 작성한다.

footer rule
- 유형 : #이슈 번호의 형식으로 작성한다.
- 이슈 트래커 ID를 작성한다.
- 여러개의 이슈 번호는 ,로 구분
