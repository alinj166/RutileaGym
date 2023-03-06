import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
    en: {
        chartOptions:{
            title: {
                text: ' Clients thats risks to quit ',
            }
        },
        navbar: {
            fintessClub: 'FitnessClub',
            backgroundMode: 'Dark Theme',
            logout: 'Logout',
            darkMode: 'Dark Mode',
            loggedIn: 'Logged In',
            comparison: 'COMPARISON',
            manageItems: 'MANAGE GYMS',
            settings: 'SETTINGS',
            dashboard: 'DASHBOARD',
            gym : 'GYM',
            analytics: 'ANALYTICS',
        },
        settingsView: {
            settings: 'Settings',
            language: "Language",
            english: 'English',
            japanese:'Japanese',
            generalSettings: "General Settings",
        },
        comparison: {
            gymComparison: "Gym Comparison",
            clientsRisktoQuit: 'Clients that risks to quit',
            numberClient: "Number of clients",
        },
        chartDisplay: {
            clientsRisktoquitperGym: "Clients that risk to quit per (Age/Gender) ",
            highrisk: "High Risk",
            mediumrisk: "Medium Risk",
            lowrisk: "Low Risk",
        },
        dashboardView: {
            logDisplay: {
                exportDataClient: "Export data client to pdf/xls",
                membershipID: "membership ID",
                currentAge: "Current Age (years)",
                gender: "Gender",
                score: "Score %",
                rowsPerPage: "Rows per page",
                DateEnrollment:"Time Enrollment",
                Action:'Action',
                export:'Export',

            },
            userCard:{
                address: "City • Street",
                city: "City",
                street: "Street",
                score: "Score",
                lastVisitDate: "Last Visit Date",
                operations: "Visits",
                recentActivies: "Recent Activities"
            }
        },  
        filtersLabels: {
            yes:"Yes",
            no:"No",
            newImage:"New image",
            newEmail:"New Email",
            newPhone:"New phone number",
            warning:"Warning",
            phoneDeleteDialog:"Are you sure you want to reset the phone number ?",
            emailDeleteDialog:"Are you sure you want to reset Email ?",  

            imageDeleteDialog:"Are you sure you want to reset the Image ?",  
            email: "email",
            phone:"phone",
            gender: "gender",
            male: 'Male',
            female: 'Female',
            age: "age",
            nonActive: "Non Active Clients",
            ative: "Active Clients",
            selectFeature: "Select Feature",
            all: "All",
            onlyActive: "Only Active",
            onlyNonActive: "Only Non Active",
            filterName: [
                {text:"gender", value:"gender"}, 
                {text:"age", value:"age"}
              ],
            filterActiveNonActive: [
                {text:"all",value: "all"}, 
                {text:"Only Active",value: "Only_active"},
                { text:"Only Non Active",value:"Only_Non_active"}
            ],
        },
        gymView: {
            deleteGymDialog:"Are you sure, you want to delete this gym?",
            cancel:"Cancel",
            save:"Save",
            deleteGym:"Delete gym",
            editGym:"Edit gym",
            totalClients: "Total Clients",
            clientsSummary: "Clients Summary",
            activeNonActive: "Active/Non Active Clients",
            editGymInformation:"Edit Gym Information",
            gymInfo: {
                gymInfo: "Gym Informations",
                gymLabel: "Gym Label",
                address: "Address",
                facilities: "Facilities",
                employees: "Employees",
                startDay: "Start Day",
                clients: "Clients" 
            },
        },

        manageItems: {
            addGym: {
                manageGyms: 'MANAGE GYMS',
                addNewGym: 'Add New Gym',
                selectGym: 'Gym Label',
                chooseFacilities: 'Choose Facilities',
                gymAddress: 'Gym Address',
                employeesNumber: 'Employees Number',
                opensAt: 'Opens At',
                closesAt: 'Closes At',
                gymCoordinates: "Gym Coordinates",
                latitudeLongitude: 'Latitude, Longitude',
            },
            uploadFile: {
                warningText:"File appears to be empty, make sure you have a file attached ",
                warningTitle:"File upload status",
                uploadDataFile: "Upload exit_entrance data",
                uploadMembersData: "Upload members' data",
            },
            submit: 'Submit',
            clear: 'Clear',
        },
        surveyForm: {
            membershipID: 'Membership ID',
            ClientSurvey:"Client's Survey",
            SurveyHistory:"Survey's history",
            userExperience:'User experience',
            username: 'Admin Name',
            emailUser: 'User Email',
            emailAdmin: 'Admin Email',
            email: 'Admin Email',
            note: 'Note (optional)',
            facilitiesMaintenance: 'Facilities that needs maintenance according to the client',
            clientContact: "Client's first meeting",
            meeting:"One to one meeting",
            offer:"Special offer made to the client",
            surveySent:"Client satisfaction survey sent ?",
            claim: 'Claim',
            client_id:'Client ID',
            claimDate:'Claim Date',
            retention:'Retention',
        }
        
    },
    ja: {
        chartOptions:{
            title: {
                text: ' 離脱するリスクのある顧客 ',
            }
        },
        navbar: {
            fintessClub: 'フィットネスクラブ',
            backgroundMode: '暗いテーマ',
            logout: 'ログアウト',
            darkMode: '暗いテーマ',
            loggedIn: 'ログインしました',
            comparison: '比較',
            manageItems: 'ジムの管理',
            settings: '設定',
            dashboard: 'ダッシュボード',
            gym : 'ジム',
            analytics: '分析',
        },
        settingsView: {
            settings: '設定',
            language: "言語",
            english: 'English',
            japanese:'Japanese',
            generalSettings: "一般設定",
        },
        comparison: {
            gymComparison: "営業所ごとの比較",
            clientsRisktoQuit: '離脱するリスクのある顧客',
            numberClient: "顧客数",
        },
        chartDisplay: {
            clientsRisktoquitperGym: "年齢/性別ごとの離脱リスクのある顧客",
            highrisk: "リスクが高い",
            mediumrisk: "中リスク",
            lowrisk: "リスクが低い",
        },
        dashboardView: {
            logDisplay: {
                exportDataClient: "顧客データのエクスポート(pdf/xls)",
                membershipID: "メンバーシップID",
                currentAge: "現在の年齢 (年)",
                gender: "性別",
                score: "離脱リスク %",
                rowsPerPage: "行",
                DateEnrollment:"会員期間",
                Action:"顧客維持アクション",
                export:'エクスポート',
                RowsPerPage:'行'


            },
            userCard:{
                address: "都市 • 番地",
                city: "街",
                street: "街",
                score: "スコア",
                lastVisitDate: "最終訪問日",
                operations: "訪問",
                recentActivies: "直近の顧客行動"
            }
        },  
        filtersLabels: {
            yes:"はい",
            no:"いいえ",
            newImage:"新しい画像",
            newEmail:"新しいEmail",
            newPhone:"新しい電話番号",
            phoneDeleteDialog:"電話番号をリセットします。よろしいでしょうか?",
            emailDeleteDialog:"Emailをリセットします。よろしいでしょうか？", 
            warning:"注意",
            imageDeleteDialog:"画像をリセットします。よろしいでしょうか?",  
            email: "メールアドレス",
            phone:"電話番号",

            gender: "性別",
            male: '男',
            female: '女性',
            age: "年齢",
            nonActive: "非アクティブなクライアント",
            ative: "アクティブなクライアント",
            selectFeature: "絞り込み",
            all: "全て",
            onlyActive: "アクティブのみ",
            onlyNonActive: "非アクティブのみ",
            filterName: [
                {text:"性別", value:"gender"}, 
                {text:"年齢", value:"age"}
              ],
            filterActiveNonActive: [
                {text:"全て",value: "all"}, 
                {text:"アクティブのみ",value: "Only_active"},
                { text:"非アクティブのみ",value:"Only_Non_active"}
            ],
        },
        gymView: {
            deleteGymDialog:"ジムを削除します。よろしいでしょうか?",
            cancel:"キャンセル",
            save:"保存",
            deleteGym:"ジムを削除",
            editGym:"ジムを編集",
            totalClients: "顧客数",
            clientsSummary: "顧客サマリー",
            activeNonActive: "アクティブ/非アクティブ",
            editGymInformation:"ジムの情報を編集",
            gymInfo: {
                gymInfo: "ジムの情報",
                gymLabel: "ジムの詳細",
                address: "住所",
                facilities: "設備",
                employees: "スタッフ",
                startDay: "オープン日",
                clients: "顧客数" 
            },
        },

        manageItems: {
            addGym: {
                manageGyms: '営業所を管理する',
                addNewGym: '新しいジムを追加',
                selectGym: '営業所',
                chooseFacilities: '施設を選ぶ',
                gymAddress: '住所',
                employeesNumber: 'スタッフ',
                opensAt: 'オープン日',
                closesAt: 'クローズ日',
                gymCoordinates: "ジムコーディネート",
                latitudeLongitude: '緯度、経度',
            },
            uploadFile: {
                warningTitle:"ファイルのアップロード状態",
                uploadDataFile: "データ更新",
                uploadMembersData: "顧客データ更新",

            },
            submit: '送信する',
            clear: 'クリア',
        },
        surveyForm: {
            membershipID: 'メンバーシップID',
            ClientSurvey:'クライアント調査',
            SurveyHistory:"調査履歴",

            userExperience:'顧客行動',
            
            username: '管理者',
            email: 'Eメール',
            emailUser: 'メールアドレス',
            emailAdmin: '管理者メールアドレス',
            note: 'メモ',
            facilitiesMaintenance: '顧客維持アクション',
            clientContact: "初回面談",
            meeting:"マンツーマン面談",
            offer:"特別なオファー",
            surveySent:"顧客満足度",
            claim: '請求',
            client_id:'顧客ID',
            claimDate:'完了日',
            retention:'離脱',
        }
    }
};

const i18n = new VueI18n({
    locale: "en", // set locale
    fallbackLocale: "ja", // set fallback locale
    messages, // set locale messages
  });
  
export default i18n;